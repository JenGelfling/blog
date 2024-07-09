let currentTheme = 'light-mode'  

function switchTheme(){
    let theme = document.body;
    theme.classList.toggle("dark-mode");
    writeToLocalStorage("theme", currentTheme)   
}



/*
function writeToLocalStorage(name, data){
    localStorage.setItem(name, JSON.stringify(data))
}

function readFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name))
}
*/





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