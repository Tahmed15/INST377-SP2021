const { event } = require("cypress/types/jquery");

/* Put your javascript in here */


let width = 140;
let count = 3;

let list = container.querySelector('ul');
let listElems = container.querySelectorAll('li');
let position = 0;

container.querySelector('.prev').onclick = function() {
    position += width*count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

container.querySelector('.next').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width *(listElems.length - count));
    list.style.marginLeft = position +'px';
};
