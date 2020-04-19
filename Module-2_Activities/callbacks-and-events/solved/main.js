const myFunction = function(event) {
  console.log('Hooray!!')


  // CHALLENGE
  document.querySelector('#display').innerText = 'I did it!';
}


// Use `document.querySelector()` to obtain a reference to the `#test` element.

const testElement = document.querySelector('#test');

// Add an event listener that triggers `myFunction` when the mouse enters the `#test` element.

testElement.addEventListener('mouseenter', myFunction);
