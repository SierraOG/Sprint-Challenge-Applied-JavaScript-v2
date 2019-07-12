// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// tabs will be appended to this element
const tabsElement = document.querySelector('.topics');

// adding the all tab
let allTab = createTab('all');
allTab.classList.add('.active-tab');
tabsElement.appendChild(allTab);

// axios get request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
    console.log(data)
    // make array of topics 
    const topicsArray = data.data.topics

    // making a new tab for each topic sin topics array and appending it to tabsElement
    topicsArray.forEach(topic => {
    let element = createTab(topic)
    tabsElement.appendChild(element)
    })
})
.catch(error => {
    console.log('error')
})

// tab creator function
function createTab(subject){
    // create new element
    const tabDiv = document.createElement('div');

    // add class
    tabDiv.classList.add('tab');

    // add text content
    tabDiv.textContent = subject;

    // add data attribute
    let tabData = '';
    (subject === 'node.js') ? tabData = 'node' : tabData = subject;
    tabDiv.setAttribute('data-tab', tabData);

    // add event listener to select tab and cards when tab is clicked

    tabDiv.addEventListener('click', () =>{
        // Select all of the elements with the .card class on them
        const activeCards = document.querySelectorAll('.card');

        // Iterate through the NodeList setting the display style each one to 'none'
        activeCards.forEach((card) => {
            card.style.display = 'none';
        })

        if(tabData === 'all'){
            // If `all` is true, select all cards regardless of their data attribute values
            let cardsToActivate = document.querySelectorAll('.card');
            // loop through the active cards array and display the active cards
            cardsToActivate.forEach(card => {
                card.style.display = 'flex'
            });
        } else {
            // else if `all` is false, only select the cards with matching this.tabData values
            let cardsToActivate = document.querySelectorAll(`.card[data-tab="${tabData}"]`);
            // loop through the active cards array and display the active cards
            cardsToActivate.forEach(card => {
                card.style.display = 'flex'
            });
        }
        
        // Select all elements with the .tab class on them
        const tabs = document.querySelectorAll('.tab');
        
        // Iterate through the NodeList removing the .active-tab class from each element
        tabs.forEach((tab) => {
            tab.classList.remove('active-tab')
        })
        
        // Add a class of ".active-tab" to the tabDiv
        tabDiv.classList.add('active-tab');
    })

    // return tab component
    return tabDiv;
}