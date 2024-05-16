//Create array of object to hold comments
const form = document.getElementById('commentForm');
const comments = [{name: 'Ruth', comment: 'I dont get it', date: '5/12/2024', date2:'5/12/2024'}];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.fullName.value;
    const comment = e.target.comment.value;
    const date = new Date().toLocaleDateString('en-US');
    const newComment = {
        name: name, comment: comment, date: date, date2: new Date()
    };
    comments.push(newComment);
    displayComments(comments);
});

function displayComments(comments){
    const commentsContainer = document.querySelector('.comment-section');
    commentsContainer.innerHTML = '';
    
    comments.sort((a,b) => b.date2 - a.date2);
    comments.forEach(comment => {
        const commentElement = document.createElement('span');
        const commentElement2 = document.createElement('span');
        const commentElement3 = document.createElement('p');
        commentElement.innerText = comment.name;
        commentElement2.innerText = comment.date;
        commentElement3.innerText = comment.comment;
        commentsContainer.appendChild(commentElement);
        commentsContainer.appendChild(commentElement2)
        commentsContainer.appendChild(commentElement3);
    });
}

