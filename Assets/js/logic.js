let currentTheme = localStorage.getItem('theme') || 'light-mode'
let theme = document.body
let formContent = document.querySelector("#content")

formContent.addEventListener('submit', handleFormSubmit)

let blogs = []

function handleFormSubmit(event){
  event.preventDefault()
  console.log(formContent)
  let username = document.querySelector('#username').value
  let title = document.querySelector('#title').value
  let blog = document.querySelector('#blog').value
  let post = {username, title, blog}
  localStorage.setItem('post', JSON.stringify(post))
  // create 
  // direct to next page and pull data from local storage

}


function setTheme(){
  theme.classList.add(currentTheme)
}

function switchTheme(){

    if (currentTheme === 'light-mode'){
      theme.classList.add("dark-mode");
      theme.classList.remove("light-mode")
      currentTheme='dark-mode'
    }
    else {
      theme.classList.add("light-mode");
      theme.classList.remove('dark-mode')
      currentTheme='light-mode'
    }
    
    writeToLocalStorage()
    return (currentTheme)
}

setTheme()

function writeToLocalStorage(){
  localStorage.setItem("theme", currentTheme)
}



// function readFromLocalStorage(currentTheme){
//     return JSON.parse(localStorage.getItem(currentTheme))
// }

/*
// const student = document.getElementById('student-names');
// const grade = document.getElementById('grades');
// const comment = document.getElementById('msg');
// const saveButton = document.getElementById('save');

function saveLastGrade() {
  // Save related form data as an object
  const studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(),
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
}

function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  const lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
  // Check if data is returned, if not exit out of the function
  if (lastGrade !== null) {
    document.getElementById('saved-name').innerHTML = lastGrade.student;
    document.getElementById('saved-grade').innerHTML = lastGrade.grade;
    document.getElementById('saved-comment').innerHTML = lastGrade.comment;
  }
}

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveLastGrade();
  renderLastGrade();
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastGrade();
}
init();
*/



// themeSwitcher.addEventListener('click', function () {
//   // If mode is dark, apply light background
//   if (mode === 'dark') {
//     mode = 'light';
//     container.setAttribute('class', 'light');
//   }
//   // If mode is light, apply dark background
//   else {
//     mode = 'dark';
//     container.setAttribute('class', 'dark');
//   }
// });




/*
const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submissionResponseEl = document.querySelector('#response');

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  const response =
    'Thank you for your submission ' +
    nameInput.value +
    '! We will reach out to you at ' +
    emailInput.value +
    '.';
  submissionResponseEl.textContent = response;
}

// Add listener to submit element
submitEl.addEventListener('click', showResponse);

*/