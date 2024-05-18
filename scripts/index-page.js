const form = document.querySelector('.commentform');
const comments = [
    {
        name: 'Tiesto',
        comment: 'I dont get it',
        date: '5/12/2024',
        date2: new Date()
    },
    {
        name: 'John',
        comment: "This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: '5/02/2024',
        date2: new Date()
    },
    {
        name: 'Tim',
        comment: "This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: '5/03/2024',
        date2: new Date()
    }
];
displayComments(comments);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.fullName.value;
    const comment = e.target.comment.value;
    const date = new Date().toLocaleDateString('en-US');
    const newComment = {
        name: name, comment: comment, date: date, date2: new Date()
    };
    comments.push(newComment);
    comments.sort((a, b) => b.date2 - a.date2);
    displayComments(comments);
});

function displayComments(comments) {
    const replyContainer= document.querySelector('.reply__container');
    replyContainer.innerHTML = '';
    comments.map(comment => {
        const divContainer = document.createElement('div');
        divContainer.classList.add('reply__containerFeed');

        const img = document.createElement('img');
        img.setAttribute('src', '../assets/images/Mohan-muruge.jpg');
        img.classList.add('user__img');

        const div = document.createElement('div');
        div.classList.add('reply__card');

        const divTop = document.createElement('div');
        divTop.classList.add('reply__card--top');
        const ul = document.createElement('ul');
        ul.classList.add('reply__card--items');
        const nameli = document.createElement('li');
        nameli.classList.add('reply__name');
        const dateli = document.createElement('li');
        dateli.classList.add('reply__date');

        const divBottom = document.createElement('div');
        divBottom.classList.add('reply__card--bottom');
        const textP = document.createElement('p');
        textP.classList.add('reply__text');

        nameli.innerText = comment.name;
        dateli.innerText = comment.date;
        textP.innerText = comment.comment;
        replyContainer.appendChild(divContainer);
        divContainer.appendChild(img);
        divContainer.appendChild(div);
        div.appendChild(divTop)
        div.appendChild(divBottom);
        divTop.appendChild(ul);
        ul.appendChild(nameli)
        ul.appendChild(dateli);
        divBottom.appendChild(textP);
    });
}
