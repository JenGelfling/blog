let allBlogs = []
let blogs = JSON.parse(localStorage.getItem("post"))

const createBlogElements = (newBlog)=>{
    // create elements
    const blogDiv = document.createElement('div');
    const blogTitle = document.createElement('h3');
    const blogUsername = document.createElement('p');
    const blogBlog = document.createElement('p');

    // fill the fields
    blogTitle.innerText = newBlog.title;
    blogUsername.innerText = "Author: " + newBlog.username;
    blogBlog.innerText = newBlog.blog;

    console.log(blogDiv)
    // add to the DOM
    blogDiv.append(blogTitle, blogBlog, blogUsername);
    document.querySelector('.blogs').append(blogDiv)
}

blogs.forEach(createBlogElements)

console.log(blogs)

document.getElementById("go-back").addEventListener("click", () => {
    history.back();
});


