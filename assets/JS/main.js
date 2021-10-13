// individuare e assegnare i variabili da utilizzare
const numberContainer = document.querySelector('.numbers');
const fizzElement = `<li class="box fizz">Fizz</li>`;
const buzzElement = `<li class="box buzz">Buzz</li>`;
const fizzBuzzElement = `<li class="box fizzbuzz">FizzBuzz</li>`;

//creare un ciclo di numeri da 1 a 100


for (let index = 1; index <= 100; index++) {
    //appendere per ogni iterazione di numero un container e riportarlo al HTML
    const boxMarkup = `<li class="box ">${index}</li>`;
    numberContainer.insertAdjacentHTML("beforeend", boxMarkup)



}


//stabilire i multipli di 3
//stabilire i multipli di 5
//stabilire i multipli sia di 3 e sia di 5