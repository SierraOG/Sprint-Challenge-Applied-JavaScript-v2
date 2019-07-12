/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// carousel will be appended to this element
const carouselContainer = document.querySelector('.carousel-container');

const imageSrcs = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];

const element = createCarousel(imageSrcs);

carouselContainer.appendChild(element);


function createCarousel(imageSrcs){
  // create new elements
  const carouselDiv = document.createElement('div');
  const leftBtn = document.createElement('div');
  const image = [];
  imageSrcs.forEach((imagesrc, i) => {
    image[i] = document.createElement('img');
    image[i].src = imagesrc;
    image[i].setAttribute('data-index', `${i}`);
    image[i].classList.add('fade');
    carouselDiv.appendChild(image[i]);
  })
  const rightBtn = document.createElement('div');

  // set classes 
  carouselDiv.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  // set text content 
  leftBtn.textContent = '<';
  rightBtn.textContent = '>';

  // set up structure 
  carouselDiv.appendChild(leftBtn);
  carouselDiv.appendChild(rightBtn);

  // functional parts
  let currentIndex = 0;
  image[currentIndex].style.display = 'block';

  leftBtn.addEventListener('click', () => {
    image[currentIndex].style.display = 'none';
      if (currentIndex === 0){
        currentIndex = image.length - 1;
      }
      else{
        currentIndex -= 1;
      }
    image[currentIndex].style.display = 'block';
  })

  rightBtn.addEventListener('click', () =>{
    image[currentIndex].style.display = 'none';
    if (currentIndex === (image.length - 1)){
      currentIndex = 0;
    }
    else{
      currentIndex += 1;
    }
    image[currentIndex].style.display = 'block';
  })

  // return component
  return carouselDiv;
}