// As user interaction
// at the end scene the svg parts with .card class get a "hover effekt" : 
// an absolut positioned div element with .cardoverlay class 
// the divs have a CTA button to the ikea site

let cards = document.querySelectorAll('.card');
let cardoverlays = document.querySelectorAll('.cardoverlay');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', function () {
        cardoverlays[i].style.display = 'flex';
    })
    cardoverlays[i].addEventListener('mouseleave', function () {
        cardoverlays[i].style.display = 'none';
    })
}
