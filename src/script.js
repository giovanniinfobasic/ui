/*===============
Scroll categories
===============*/
const buttonPrev = document.querySelector("#buttonPrev");
const buttonNext = document.querySelector("#buttonNext");
const boxScroll = document.querySelector("#boxScroll");
buttonPrev.onclick = function () {
    boxScroll.scrollLeft -= 500;
};
buttonNext.onclick = function () {
    boxScroll.scrollLeft += 500;
};