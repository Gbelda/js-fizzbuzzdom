// individuare e assegnare i variabili da utilizzare
const numberContainer = document.querySelector('.numbers');
const fizzElement = `<li class="box fizz">Fizz</li>`;
const buzzElement = `<li class="box buzz">Buzz</li>`;
const fizzBuzzElement = `<li class="box fizzbuzz">FizzBuzz</li>`;

//creare un ciclo di numeri da 1 a 100
for (let index = 1; index <= 100; index++) {
    //appendere per ogni iterazione di numero un container e riportarlo al HTML
    const neutralElement = `<li class="box neutral">${index}</li>`;

    //stabilire i multipli sia di 3 e sia di 5
    if (index % 3 == 0 && index % 5 == 0) {
        numberContainer.insertAdjacentHTML("beforeend", fizzBuzzElement)

        //stabilire i multipli di 5
    } else if (index % 5 == 0) {
        numberContainer.insertAdjacentHTML("beforeend", buzzElement)

        //stabilire i multipli di 3
    } else if (index % 3 == 0) {

        numberContainer.insertAdjacentHTML("beforeend", fizzElement)

        //inserire i numeri mancanti non multipli ne di 3 ne di 5
    } else {
        numberContainer.insertAdjacentHTML("beforeend", neutralElement)
    }




}






