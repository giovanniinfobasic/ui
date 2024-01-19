const divArray = document.querySelectorAll('.calc');
let currentIndex = 0;
pin = [];
//al click inserisce i valori dei numeri in console
function addToDisplay(element) {
    pin.push(element.value);
    console.log(pin);
}
//al click rimuove i valori dei numeri in console
function removeDisplay() {
    pin.pop();
    console.log(pin);
}
//al click resetta i valori dei numeri in console
function removeDisplayNum() {
    pin = [];
    console.log(pin);
}
//al click aggiunge le classi dai singoli pin
function pinAdd() {
    if (currentIndex < divArray.length) {
        divArray[currentIndex].classList.add("h-5", "w-5", "rounded-full");
        currentIndex++;
    }
}
//al click rimuove le classi dai singoli pin
function removeNumber() {
    if (currentIndex > 0) {
        currentIndex--;
        divArray[currentIndex].classList.remove("h-5", "rounded-full");
    }
}
//al click rimuove tutte le classi dai singoli pin
function removeAllNumber() {
    let display = document.querySelectorAll('#display div');
    display.forEach(elemento => {
        // Rimuovi le classi desiderate
        elemento.classList.remove("h-5");
        elemento.classList.add("h-1",);
    });
}