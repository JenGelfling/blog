let currentTheme = 'light'  

function switchTheme(){
    writeToLocalStorage("theme", currentTheme)   
}

function writeToLocalStorage(name, data){
    localStorage.setItem(name, JSON.stringify(data))
}

function readFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name))
}