const form = document.querySelector(".commentform");
// const comments = [
// 	{
// 		name: "Tiesto",
// 		comment:
// 			"This is art. This is inexplicable magic expressed in the purest way,ever thing that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
// 		date: "5/02/2024",
// 		date2: new Date(),
// 	},
// 	{
// 		name: "John",
// 		comment:
// 			"This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
// 		date: "5/02/2024",
// 		date2: new Date(),
// 	},
// 	{
// 		name: "Tim",
// 		comment:
// 			"This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
// 		date: "5/03/2024",
// 		date2: new Date(),
// 	},
// 	{
// 		name: "Tim",
// 		comment:
// 			"This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
// 		date: "5/03/2024",
// 		date2: new Date(),
// 	},
// ];
let comments = [];

async function fetchAndStoreComments() {
	try {
		comments = await myConnection.fetchComments();
		
		console.log(comments);
		comments.sort((a, b) => b.timestamp - a.timestamp);
		displayComments(comments);
	} catch (error) {
		console.log(error);
	}
}

fetchAndStoreComments();

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const name = e.target.fullName.value;
	const comment = e.target.comment.value;
	const newComment = {
		name: name,
		comment: comment,
	};

	await myConnection.postNewComments(newComment);

	form.reset();

	fetchAndStoreComments();
});

function displayComments(comments) {
	const replyContainer = document.querySelector(".reply__container");
	replyContainer.innerHTML = "";
	comments.forEach((comment) => {
		const divContainer = document.createElement("div");
		divContainer.classList = "reply__containerFeed";

		const img = document.createElement("img");
		img.setAttribute("src", "../assets/images/Mohan-muruge.jpg");
		img.classList = "user__img";

		const div = document.createElement("div");
		div.classList = "reply__card";

		const divTop = document.createElement("div");
		divTop.classList = "reply__card--top";
		const ul = document.createElement("ul");
		ul.classList = "reply__card--items";

		const nameli = document.createElement("li");
		nameli.classList = "reply__name";
		const dateli = document.createElement("li");
		dateli.classList = "reply__date";

		const divBottom = document.createElement("div");
		divBottom.classList = "reply__card--bottom";
		const textP = document.createElement("p");
		textP.classList = "reply__text";

		nameli.innerText = comment.name;
		const date = new Date(comment.timestamp);
		dateli.innerText = date.toLocaleDateString('en-US');
		textP.innerText = comment.comment;
		replyContainer.appendChild(divContainer);
		divContainer.appendChild(img);
		divContainer.appendChild(div);
		div.appendChild(divTop);
		div.appendChild(divBottom);
		divTop.appendChild(ul);
		ul.appendChild(nameli);
		ul.appendChild(dateli);
		divBottom.appendChild(textP);
	});
}
