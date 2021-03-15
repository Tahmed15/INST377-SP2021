const { event } = require("cypress/types/jquery");

/* Put your javascript in here */
function clickToChangeBox() {
    document.addEventListener('click', (event)=> {
        const box = document.querySelector('#box1');
        const classes = box.classList;
        console.log(classes.value);
        const newClass = (classes.value === "main") ? "second" : "main";
        console.log(newClass);
        box.classList = newClass;
    });
}
window.onload = clickToChangeBox;