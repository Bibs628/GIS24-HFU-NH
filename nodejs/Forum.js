//NavBar
function hideIconBar() {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar() {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment() {
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply() {
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

// Event listener for form submission
document.getElementById('forumForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
        
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const posts = JSON.parse(localStorage.getItem('posts')) || []; // Get existing posts from localStorage or initialize an empty array
        
    // Add the new post to the array
    posts.push({ username, message, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    localStorage.setItem('posts', JSON.stringify(posts)); // Save the updated posts array to localStorage
        
    displayPosts(); // Update the displayed posts
    this.reset(); // Reset the form fields
});

// Event listener for clearing the localStorage
document.getElementById('clearStorage').addEventListener('click', function() {
    localStorage.removeItem('posts'); // Remove the posts from localStorage
    displayPosts(); // Update the displayed posts
});

// Function to display posts
function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || []; // Get existing posts from localStorage or initialize an empty array
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear the existing posts
        
    // Create and append post elements for each post
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

// Display posts when the DOM content is loaded
document.addEventListener('DOMContentLoaded', displayPosts);