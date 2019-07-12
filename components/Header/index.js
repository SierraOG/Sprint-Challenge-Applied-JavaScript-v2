// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    // create new elements 
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const header = document.createElement('h1');
    const temp = document.createElement('span');

    // add classes 
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // add text content
    date.textContent = 'SMARCH 28, 2019';
    header.textContent = 'Lambda Times';
    temp.textContent = '98°';

    // set up structure
    headerDiv.appendChild(date);
    headerDiv.appendChild(header);
    headerDiv.appendChild(temp);

    // return component
    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
const newHeader = Header();
headerContainer.append(newHeader);
