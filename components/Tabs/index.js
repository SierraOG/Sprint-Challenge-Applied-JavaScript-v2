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

    // return tab 
    return tabDiv;
}