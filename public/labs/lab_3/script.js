const { event } = require("cypress/types/jquery");

/* Put your javascript in here */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

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
