```

### script.js:
```javascript
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
            newPost.innerHTML = `<h3 class="post-title">${title}</h3><p class="post-content">${content}</p><p class="post-meta">Posted by User1</p><div class="actions"><button class="like-button">Like</button><button class="comment-button">Comment</button></div><div class="comments-section"><form class="comment-form"><input type="text" placeholder="Add a comment..." required><button type="submit">Post</button></form></div>`;
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
            const commentSection = e.target.closest('.post').querySelector('.comments-section');
            commentSection.querySelector('.comment-form input').focus();
        }
    });

    // Handle comment form submission
    document.body.addEventListener('submit', function (e) {
        if (e.target.classList.contains('comment-form')) {
            e.preventDefault();
            const commentInput = e.target.querySelector('input');
            const commentText = commentInput.value;
            
        if (commentText) {
            const newComment = document.createElement('p');
            newComment.innerHTML = `<strong>User:</strong> ${commentText}`;
            e.target.closest('.comments-section').insertBefore(newComment, e.target);
            commentInput.value = '';
            }
        }
    });
});
