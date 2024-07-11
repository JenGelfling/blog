
let blogs = []


const addBlog = (username, title, blog) => {}

const createBlogElement = ({username, title, blog})=>{
    const blogDiv = document.createElement('div');
    const blogTitle = document.createElement('h2');
    const blogUsername = document.createElement('p');
    const blogBlog = document.createElement('p');

    blogTitle.innerText = "Title: " + title;
    blogUsername.innerText = "Author: " + username;
    blogBlog.innerText = blog;
}



document.getElementById("go-back").addEventListener("click", () => {
    history.back();
});