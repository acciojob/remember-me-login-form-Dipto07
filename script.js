//your JS code here. If required.
let nameInput = document.getElementById('username');
let passwordInput = document.getElementById("password");
let checkInput = document.getElementById("checkbox");
let sbutton = document.getElementById("submit");
var name;
var password;
var check;

nameInput.addEventListener('input', () => {
    name = nameInput.value;
});

passwordInput.addEventListener('input', () => {
    password = passwordInput.value;
});

checkInput.addEventListener("input", () => {
      check = checkInput.checked;
});

sbutton.addEventListener('click', () => {
    if(check){
      localStorage.setItem('username',name);
      localStorage.setItem('password',password);
    }
    alert(`Logged in as ${name}`);
});
