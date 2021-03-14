const { event } = require("cypress/types/jquery");

/* Put your javascript in here */
let width = 150;
let count = 3;

let list = container.querySelector('ul');
let listElems = container.querySelectorAll('li');
let position = 0;

container.querySelector('.prev').onclick = function() {
    position += width*count;
}
container.querySelector('.next').onclick = function() {
    position -= width * count;
};
