/*
Create buttons that do each of the tasks below

Render the results to the page in html elements.

Hide the results from the previous actions

Get all posts
Get post with id of 10
Create a new post and log the id generated for it by the server
Replace the post with id of 12 and render the responseJSON
Update the title of post with id of 12 and render responseJSON
Delete the post with id of 12 and render a success message
*/

// Function to display posts
const displayPosts = (posts) => {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear previous posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-12 mb-3';
        postElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
};

// Function to display a single post
const displaySinglePost = (post) => {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear previous posts

    const postElement = document.createElement('div');
    postElement.className = 'col-12 mb-3';
    postElement.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
            </div>
        </div>
    `;
    postsContainer.appendChild(postElement);
};

// Function to display success message
const displaySuccessMessage = (message) => {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear previous posts

    const messageElement = document.createElement('div');
    messageElement.className = 'col-12 mb-3';
    messageElement.innerHTML = `
        <div class="alert alert-success" role="alert">
            ${message}
        </div>
    `;
    postsContainer.appendChild(messageElement);
};

// Get all posts
const getAllPosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => displayPosts(json))
        .catch((error) => console.error('Error fetching data:', error));
};

document.getElementById('allPosts').addEventListener('click', getAllPosts);

// Get post with id of 10
const getPost10 = () => {
    fetch('http://jsonplaceholder.typicode.com/posts/10')
        .then((response) => response.json())
        .then((json) => displaySinglePost(json))
        .catch((error) => console.error('Error fetching data:', error));
};

document.getElementById('post10').addEventListener('click', getPost10);

// Create a new post and log the id generated for it by the server
const createNewPost = () => {
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log('Created post ID:', json.id);
            displaySinglePost(json);
        })
        .catch((error) => console.error('Error creating post:', error));
};

document.getElementById('newPost').addEventListener('click', createNewPost);

// Replace the post with id of 12 and render the responseJSON
const replacePost12 = () => {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
            id: 12,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => displaySinglePost(json))
        .catch((error) => console.error('Error replacing post:', error));
};

document.getElementById('replacePost12').addEventListener('click', replacePost12);

// Update the title of post with id of 12 and render responseJSON
const updatePost12 = () => {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'Updated title',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => displaySinglePost(json))
        .catch((error) => console.error('Error updating post:', error));
};

document.getElementById('updatePost12').addEventListener('click', updatePost12);

// Delete the post with id of 12 and render a success message
const deletePost12 = () => {
    fetch('http://jsonplaceholder.typicode.com/posts/12', {
        method: 'DELETE',
    })
        .then(() => displaySuccessMessage('Post 12 deleted successfully.'))
        .catch((error) => console.error('Error deleting post:', error));
};

document.getElementById('deletePost12').addEventListener('click', deletePost12);
