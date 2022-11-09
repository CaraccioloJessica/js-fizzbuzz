// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// VARIABILI
const contenitore = document.querySelector(".container");

// STAMPARE NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {

  // VARIABILI INTERNE AL CICLO
  const element = document.createElement("div");
  contenitore.append(element);
  
  //MULTIPLI DI 3 E 5
  if (i % 3 === 0 && i % 5 === 0){
    element.append("FizzBuzz");
  }
  //MULTIPLI DI 5
  else if (i % 5 === 0){
    element.append("buzz");
  }
  // MULTIPLI DI 3
  else if (i % 3 === 0 ){
    element.append("fizz");
  }
  else{
    element.append(i);
  }
}
