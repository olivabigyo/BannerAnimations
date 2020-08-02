

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
