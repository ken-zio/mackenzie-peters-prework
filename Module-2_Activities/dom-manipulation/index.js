// Get references to the #movie and #character-list elements
const movieH1 = document.querySelector('#movie');
const characterListUL = document.querySelector('#character-list');

// Set the inner text of the #movie element
movieH1.innerText = 'The Matrix';

// Define an array of characters to loop over
const characters = ['Neo', 'Trinity', 'Morpheus', 'Mr. Smith'];

// Define a placeholder for our character HTML list
let characterHTML = '';

// For each character, add an li element string to the characterHTML string
for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    characterHTML += `<li>${character}</li>`;
}

// Set the inner HTML of the character list to the characterHTML string
characterListUL.innerHTML = characterHTML;