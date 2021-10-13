// assegnare i variabili agli elementi del HTML
const numberContainer = document.querySelector('.numbers')

//creare un ciclo di numeri da 1 a 100
for (let index = 1; index <= 100; index++) {
    //appendere per ogni iterazione di numero un container e riportarlo al HTML
    const boxElement = `<li class=box>${index}</li>`;
    numberContainer.insertAdjacentHTML("beforeend", boxElement)


}
//stabilire i multipli di 3
//stabilire i multipli di 5
//stabilire i multipli sia di 3 e sia di 5