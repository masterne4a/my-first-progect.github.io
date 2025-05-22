import { massiv } from './massiv.js';

let button = document.querySelector('.button');
let second_part = document.querySelector('.second_part');
/*let randomImage = document.getElementById("randomImage");*/

function getRandomPhrase(arr) {
let phrase = Math.floor(Math.random()*arr.length);
return arr[phrase]
};

/*button.addEventListener('click', function () {
    second_part.textContent = getRandomPhrase(massiv);
    randomImage.src = "https://picsum.photos/500/300?random=" + Math.random();
    
});*/
button.addEventListener('click', function () {
  
    let randomElement = getRandomPhrase(massiv);
   /* randomImage.src = "https://picsum.photos/500/300?random=" + Math.random();*/
    smoothly(second_part, 'textContent', randomElement);
   
  
      if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
