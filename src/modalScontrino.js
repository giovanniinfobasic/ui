//Pulsanti apertura / chiusura / modal
const btnOpen = document.querySelector("#btnOpen");
const boxModal = document.querySelector("#modalScontrino");
const btnClose = document.querySelector("#btnClose");

//Funzione apertura modal da pulsante
function openModal() {
    boxModal.classList.remove("hidden");
}
//Funzione chiusura modal da pulsante
function closeModal() {
    boxModal.classList.add("hidden");
}
//Apertura e chiusura al click dei pulsanti
btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);