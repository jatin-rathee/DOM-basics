
/*-------------------------- querySelector ----------------------------- */

// querySelector
let para = document.querySelector('p');
para = document.querySelector('div.error');
para = document.querySelector('body > h1');

console.log(para);

// querySelectorAll
let paras = document.querySelectorAll('p'); // returns nodelist

console.log(paras);
console.log(paras[0]);  // can use square bracket notation

paras.forEach(para => console.log(para));   // can use a forEach function


/*-------------------------- get an element by ID ----------------------------- */

const title = document.getElementById('page-title');

console.log(title);

/*-------------------------- get an elements by their class name ----------------------------- */

const errors = document.getElementsByClassName('error');    // returns HTMLCollection

console.log(errors);
console.log(errors[0]);     // can use a square bracket notation

// errors.forEach(error => console.log(error)); returns a error ie. can't use forEach on HTMLCollection


/*-------------------------- get an elements by their tag name ----------------------------- */

paras = document.getElementsByTagName('p');   // returns a HTMLCollection

console.log(paras);
console.log(paras[0]);


/*-------------------------- Adding & Changing Page content ----------------------------- */


para = document.querySelector('p');

console.log(para.innerText);

para.innerText = 'ninjas are awesome!';

paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

const content = document.querySelector('.content');

console.log(content.innerHTML);
// content.innerHTML = '<h2>This is new H2</h2>';
content.innerHTML += '<h2>This is new H2</h2>';


people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});