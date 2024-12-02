
document.getElementById('forumForm').addEventListener('submit', function(event) {
    event.preventDefault();
        
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
        
    posts.push({ username, message, timestamp: new Date().toLocaleString() });
    localStorage.setItem('posts', JSON.stringify(posts));
        
    displayPosts();
    this.reset();
});

function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
        
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <p><strong>${post.username}</strong> <em>${post.timestamp}</em></p>
        <p>${post.message}</p>
          `;
        postsContainer.appendChild(postElement);
    });
}

    document.addEventListener('DOMContentLoaded', displayPosts);
