let allBlogs = []
let blogs = JSON.parse(localStorage.getItem("post"))

console.log(blogs)

// const addBlog = (title, username, blog) => {}

const createBlogElements = (newBlog)=>{
    // create elements
    const blogDiv = document.createElement('div');
    const blogTitle = document.createElement('h2');
    const blogUsername = document.createElement('p');
    const blogBlog = document.createElement('p');

    // fill the fields
    blogTitle.innerText = "Title: " + newBlog.title;
    blogUsername.innerText = "Author: " + newBlog.username;
    blogBlog.innerText = newBlog.blog;

    console.log(blogDiv)
    // add to the DOM
    blogDiv.append(blogTitle, blogUsername, blogBlog);
    document.querySelector('.blogs').append(blogDiv)
}

blogs.forEach(createBlogElements)

console.log(blogs)

document.getElementById("go-back").addEventListener("click", () => {
    history.back();
});


