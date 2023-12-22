// Write your code here!
// index.js

// Remove the main#main node
const mainNode = document.getElementById('main');
if (mainNode) {
  mainNode.remove();
}

// Create a new h1#victory node
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Weddy is the champion';

// Append the new header to the document body or any other desired location
document.body.appendChild(newHeader);
