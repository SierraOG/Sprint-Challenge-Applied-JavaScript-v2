// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// cards will be added to this element
const cardsContainer = document.querySelector('.cards-container');

// axios get request 
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
    console.log(data)
    let articlesObjects = data.data.articles
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(data => {
            console.log(data)
            // make array of topics 
            const topicsArray = data.data.topics

            // one topic name is node.js but to acces the articles for it we have to change it to node
            topicsArray[4] = 'node'

            // for each topic get the articles
            topicsArray.forEach(topic => {
                // this variable is an array of objects in that topic
                let articleObjectsTopic = articlesObjects[topic]
                console.log(articleObjectsTopic)
                // for each object in the array, add the article to the page
                articleObjectsTopic.forEach(articleObject =>{
                    console.log(articleObject)
                    let articleElement = createCard(articleObject, topic)
                    cardsContainer.appendChild(articleElement)
                })
            })
        })
})
.catch(error => {
    console.log('error', error)
})


// card creating function
function createCard(articleObject, topic){
    // create new elements 
    const cardDiv = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const authorSpan = document.createElement('span');
    
    // add class names
    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');

    // add text content 
    headline.textContent = articleObject.headline;
    img.src = articleObject.authorPhoto;
    authorSpan.textContent = articleObject.authorName

    // add structure
    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgDiv);
    imgDiv.appendChild(img);
    author.appendChild(authorSpan);

    // add data attribute
    cardDiv.setAttribute('data-tab', topic);

    // return component
    return cardDiv;
}