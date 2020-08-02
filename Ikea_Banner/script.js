
let card5 = document.querySelector('#kitchen');
let cardover5 = document.querySelector('.cardoverlay5');
card5.addEventListener('mouseenter', function () {
    cardover5.style.display = 'flex';
})
card5.addEventListener('mouseleave', function () {
    cardover5.style.display = 'none';
})
