// const { event } = require("cypress/types/jquery");

// /* Put your javascript in here */
// function clickToChangeBox() {
//     const prev = document.querySelector('prev');
//     const next = document.querySelector('next');

//     prev.addEventListener('click', (event)=> {
//         console.log('clicked prev');


//         //const box = document.querySelector('#box1');
//         //const classes = box.classList;
//         //console.log(classes.value);
//         //const newClass = (classes.value === "main") ? "second" : "main";
//         //console.log(newClass);
//         //box.classList = newClass;
//     });
// }
// window.onload = clickToChangeBox;

let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* configuration */
    let width = 130; // image width
    let count = 3; // visible images count

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // ribbon scroll position

    carousel.querySelector('.prev').onclick = function() {
      // shift left
      position += width * count;
      // can't move to the left too much, end of images
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // shift right
      position -= width * count;
      // can only shift the ribbbon for (total ribbon length - visible count) images
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };