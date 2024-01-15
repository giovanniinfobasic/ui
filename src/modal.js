//Dichiaro le variabili da usare per il modal dello scontrino
const modalBtn = document.querySelector("#modalBtn");
const modalBtnClose = document.querySelector("#modalBtnClose");
const modalScontrino = document.querySelector("#modalScontrino");

//Funzione che apre il modal
function openModal() {
    modalScontrino.classList.remove("hidden");
}
//Funzione che chiude il modal
function closeModal() {
    modalScontrino.classList.add("hidden");
}
//Quando aprire e chiudere il modal
modalBtn.addEventListener("click", openModal);
modalBtnClose.addEventListener("click", closeModal);