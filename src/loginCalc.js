const divArray = document.querySelectorAll('.calc');
let currentIndex = 0;
pin = [];
//al click aggiunge le classi dai singoli pin
function numAdd(element) {
    if (currentIndex < divArray.length) {
        divArray[currentIndex].classList.add("h-5", "w-5", "rounded-full");
        currentIndex++;
        pin.push(element.value);
        console.log(pin);
    }
}
//al click rimuove le classi dai singoli pin
function numRemove() {
    if (currentIndex > 0) {
        currentIndex--;
        divArray[currentIndex].classList.remove("h-5", "rounded-full");
        pin.pop();
        console.log(pin);
    }
}
//al click rimuove tutte le classi dai singoli pin
function removeAllNumber() {
    let display = document.querySelectorAll('#display div');
    display.forEach(elemento => {
        // Rimuovi le classi desiderate
        elemento.classList.remove("h-5", "rounded-full");
        elemento.classList.add("h-1",);
    });
    pin = [];
    currentIndex = 0;
    console.log(pin);
}