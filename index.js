// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redParagraph = document.createElement('p');
redParagraph.classList.add('redParagraph');
redParagraph.textContent = "Hey I'm red!";
redParagraph.setAttribute('style', 'color: red;');

var blueHeader = document.createElement('h3');
blueHeader.classList.add('blueHeader');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.setAttribute('style', 'color: blue;');

var pinkAndBlackDiv = document.createElement('div');
pinkAndBlackDiv.classList.add('pinkAndBlackDiv');
pinkAndBlackDiv.style.backgroundColor = 'pink';
pinkAndBlackDiv.style.border = '1px solid black';


var insideH1 = document.createElement('h1');
insideH1.classList.add('insideH1');
insideH1.textContent = "I'm in a div!";

var insideParagraph = document.createElement('p');
insideParagraph.classList.add('insideParapgraph');
insideParagraph.textContent = "ME TOO!";

pinkAndBlackDiv.appendChild(insideH1);
pinkAndBlackDiv.appendChild(insideParagraph);

container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueHeader);
container.appendChild(pinkAndBlackDiv);