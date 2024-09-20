document.addEventListener('DOMContentLoaded', function() {
    console.log('Forum loaded');

    // Handle new topic submission
    const form = document.getElementById('new-topic-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            // Add new post to topics page (this is just a simulation without backend)
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `<h3 class="post-title">${title}</h3><p class="post-content">${content}</p>`;
            document.getElementById('forum-section').appendChild(newPost);

            // Clear the form
            form.reset();
        });
    }
});document.addEventListener('DOMContentLoaded', function() {
    console.log('Форум загружен');
  //You can add other functions
});
