
let card1 = document.querySelector('#table');
let card2 = document.querySelector('#work');
let card3 = document.querySelector('#bedroom');
let card4 = document.querySelector('#kids');
let card5 = document.querySelector('#kitchen');
let cardover1 = document.querySelector('.cardoverlay1');
let cardover2 = document.querySelector('.cardoverlay2');
let cardover3 = document.querySelector('.cardoverlay3');
let cardover4 = document.querySelector('.cardoverlay4');
let cardover5 = document.querySelector('.cardoverlay5');
card1.addEventListener('mouseenter', function () {
    cardover1.style.display = 'flex';
});
cardover1.addEventListener('mouseleave', function () {
    cardover1.style.display = 'none';
});
card2.addEventListener('mouseenter', function () {
    cardover2.style.display = 'flex';
});
cardover2.addEventListener('mouseleave', function () {
    cardover2.style.display = 'none';
});
card3.addEventListener('mouseenter', function () {
    cardover3.style.display = 'flex';
});
cardover3.addEventListener('mouseleave', function () {
    cardover3.style.display = 'none';
});
card4.addEventListener('mouseenter', function () {
    cardover4.style.display = 'flex';
});
cardover4.addEventListener('mouseleave', function () {
    cardover4.style.display = 'none';
});
card5.addEventListener('mouseenter', function () {
    cardover5.style.display = 'flex';
});
cardover5.addEventListener('mouseleave', function () {
    cardover5.style.display = 'none';
});
