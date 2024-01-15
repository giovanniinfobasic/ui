const modalBtn = document.querySelector("#modalBtn");
const modalBtnClose = document.querySelector("#modalBtnClose");
const modalScontrino = document.querySelector("#modalScontrino");

function openModal() {
    modalScontrino.classList.remove("hidden");
}
function closeModal() {
    modalScontrino.classList.add("hidden");
}
modalBtn.addEventListener("click", openModal);
modalBtnClose.addEventListener("click", closeModal);