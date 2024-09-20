document.addEventListener('DOMContentLoaded', function () {
    console.log('Forum loaded');

    // Handle new topic submission
    const form = document.getElementById('new-topic-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            // Add new post to topics page (this is just a simulation without backend)
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `<h3 class="post-title">${title}</h3><p class="post-content">${content}</p><p class="post-meta">Posted by User1</p><div class="actions"><button class="like-button">Like</button><button class="comment-button">Comment</button></div><div class="comments-section"></div>`;
            document.getElementById('forum-section').appendChild(newPost);

            // Clear the form
            form.reset();
        });
    }

    // Handle likes and comments
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('like-button')) {
            alert('You liked this post!');
        }
        if (e.target.classList.contains('comment-button')) {
            const comment = prompt('Enter your comment:');
            if (comment) {
                const commentSection = e.target.closest('.post').querySelector('.comments-section');
                const newComment = document.createElement('p');
                newComment.innerHTML = `<strong>User:</strong> ${comment}`;
                commentSection.appendChild(newComment);
            }
        }
    });
});
