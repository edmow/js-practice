//ex1
const button = document.querySelector('#button')
const ex1 = document.querySelector('#ex1')
const colors = ['red','green','blue','yellow','pink','purple']

ex1.style.backgroundColor = 'violet'
button.addEventListener('click', changeColor)

function changeColor (){
  const colorIndex = parseInt(Math.random()*colors.length)
  ex1.style.backgroundColor = colors[colorIndex]
}

//ex2
(function(){
  const button = document.querySelector('#button2')
  const ex2 = document.querySelector('#ex2')
  const hexValues = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  const value = document.querySelector('#hex-value')

  button.addEventListener('click', changeHex)

  function changeHex(){
    let hex = '#'

    for (let i = 0; i < 6; i++){
      const index = Math.floor(Math.random()*hexValues.length)
      hex += hexValues[index]
    }
    value.textContent = hex
    ex2.style.backgroundColor = hex
  }
})()

//ex3
let count = 0;
const btnUp = document.querySelector('#addCount')
const btnDown = document.querySelector('#lowerCount')
const displayCount = document.querySelector('#displayCount') 

btnUp.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}
btnDown.onclick = function(){
  count--;
  displayCount.innerHTML = count;
}

//ex4
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}