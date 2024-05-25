const populateShows = async () => {
	try{
		shows = await myConnection.fetchShows();
		console.log(shows)

		shows.forEach((e) => {
			const showsContainer = document.querySelector(".shows__container");
			const showContainer = document.createElement("div");
			const showContainerDate = document.createElement("div");
			const showContainerVenue = document.createElement("div");
			const showContainerLocation = document.createElement("div");

			showContainer.classList.add("show__container");
			showContainerDate.classList.add("show__container--date");
			showContainerVenue.classList.add("show__container--venue");
			showContainerLocation.classList.add("show__container--location");

			const dateLabel = document.createElement("span");
			dateLabel.classList.add("show__container--dateLabel");
			dateLabel.classList.add("hideLabel");
			const dateElement = document.createElement("span");

			const venueLabel = document.createElement("span");
			venueLabel.classList.add("show__container--venueLabel");
			venueLabel.classList.add("hideLabel");
			const venueElement = document.createElement("span");

			const locationLabel = document.createElement("span");
			locationLabel.classList.add("show__container--locationLabel");
			locationLabel.classList.add("hideLabel");
			const locationElement = document.createElement("span");

			const buttonElement = document.createElement("button");
			buttonElement.classList.add("btn");
			dateLabel.innerText = "DATE";
			const date = new Date(e.date);
			dateElement.innerText = date.toDateString();
			venueLabel.innerText = "VENUE";
			venueElement.innerText = e.place;
			locationLabel.innerText = "LOCATION";
			locationElement.innerText = e.location;
			buttonElement.innerText = "BUY TICKETS";

			showsContainer.appendChild(showContainer);

			showContainer.appendChild(showContainerDate);
			showContainerDate.appendChild(dateLabel);
			showContainerDate.appendChild(dateElement);

			showContainer.appendChild(showContainerVenue);
			showContainerVenue.appendChild(venueLabel);
			showContainerVenue.appendChild(venueElement);

			showContainer.appendChild(showContainerLocation);
			showContainerLocation.appendChild(locationLabel);
			showContainerLocation.appendChild(locationElement);

			showContainer.appendChild(buttonElement);
		});
	} catch (error){
		console.log(error);
	}
}


populateShows();

// const dateLabel = document.querySelector(".show__container--dateLabel");
// dateLabel.classList.remove("hideLabel");
// const venueLabel = document.querySelector(".show__container--venueLabel");
// venueLabel.classList.remove("hideLabel");
// const locationLabel = document.querySelector(".show__container--locationLabel");
// locationLabel.classList.remove("hideLabel");


const items = document.querySelectorAll(".show__container");
items.forEach((show) => {
	show.addEventListener("click", handleItemClick);
});

function handleItemClick(event) {
	const shows = document.querySelectorAll(".show__container");
	shows.forEach((item) => item.classList.remove("hover"));
	shows.forEach((item) => item.classList.remove("selected"));
	event.currentTarget.classList.add("selected");
}

