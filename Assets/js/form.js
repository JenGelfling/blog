
let formContent = document.querySelector("#content")

formContent.addEventListener('submit', handleFormSubmit)


function handleFormSubmit(event){
  event.preventDefault()
  // console.log(formContent)
  let username = document.querySelector('#username').value
  let title = document.querySelector('#title').value
  let blog = document.querySelector('#blog').value
  let post = {username, title, blog}
  localStorage.setItem('post', JSON.stringify(post))
  // create 
  // direct to next page and pull data from local storage
  redirect()

}

function redirect(){
    window.location.href="./blog.html";
}