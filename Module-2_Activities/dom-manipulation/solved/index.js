// Prompt the user for some information
const name = prompt('What is your name?');
const color = prompt('What is your favorite color?');
const season = prompt('What is your favorite season?');
let interests = prompt('What are you interested in?\nSeperate interests with a comma.\ne.g. hiking, fishing golf, etc.');

// Split is a built-in method that turns a string into an array of smaller strings, splitting them by a specified seperator (', in this case')
interests = interests.split(',');

// 1. Get references to the #name, #color, #season, and #interests elements
let nameSpan = document.querySelector('#name');
let colorSpan = document.querySelector('#color');
let seasonSpan = document.querySelector('#season');
let interestUL = document.querySelector('#interests');


// 2. Set the `innerText` of the #name, #color, and #season elements to their corresponding collected values
nameSpan.innerText = name;
colorSpan.innerText = color;
seasonSpan.innerText = season;

// 3. Use a for-loop and the `innerText` property to create a string of li tags containing each collected intererst
let interestHTML = '';
for (let i = 0; i < interests.length; i++) {
    const interest = interests[i];
    interestHTML += `<li>${interest}</li>`;
}

// Insert the string of interest li tags inside of the #interests element

interestUL.innerHTML = interestHTML;
    