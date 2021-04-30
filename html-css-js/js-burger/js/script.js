// // provo a prendere il nome dell'hamburger dall'input
// var hamburgerName = document.getElementsByClassName('hamburger-name-input')[0];
// console.log(hamburgerName);
//
// // ogni ingrediente deve avere il suo prezzo.
// // Inserisco un numero float al value (HTML) di ogni input checkbox che sarà
// // il prezzo da aggiungere all'hamburger.
//
// // provo a prendere il value delle checkbox se spuntate
// // inizio dal container generale
// var ingredientsContainer = document.getElementsByClassName('hamburger-ingredients-container')[0];
// // console.log(ingredientsContainer);
// var ingredientsList = ingredientsContainer.getElementsByTagName('input');
// // console.log(ingredientsList);
// var i = 0; // class index
// var ingredientsCounter = 0; // variabile che incrementa di 1 al check delle checkboxes
// var ingredientsSumPrice = 0; // variabile che memorizza la somma dei prezzi degli ingredienti se checked
// var hamburgerBasePrice = 3; // variabile dove memorizzo il prezzo base dell'hamburger
// var hamburgerFinalPrice = 0; // inizializzo la varibile per il prezzo finale dell'hamburger (compreso di ingredienti)
// // faccio la somma dei prezzi degli ingredienti che poi aggiungerò al prezzo base
// // dell'hamburger
// for (i = 0; i < ingredientsList.length; i++) {
//   // console.log(ingredientsList[i].value);
//   if (ingredientsList[i].checked) {
//     // console.log(ingredientsList[i].value);
//     ingredientsSumPrice += parseFloat(ingredientsList[i].value);
//     // console.log(ingredientsSumPrice);
//     ingredientsCounter++;
//     // console.log(ingredientsCounter);
//   }
//
// }
//
// // controllo che almeno due cheboxes siano checked
// if (ingredientsCounter < 2) {
//   alert('Devi scegliere almeno due ingredienti')
// }
//
// // sommo ad hamburgerBasePrice ingredientsSumPrice
// hamburgerFinalPrice = hamburgerBasePrice + ingredientsSumPrice;
// console.log(hamburgerFinalPrice);
//
// // semplifico il passaggio appena sopra --> preferisco il passaggio sopra
// // hamburgerBasePrice += ingredientsSumPrice;
// // console.log(hamburgerBasePrice);

var hamburgerName = document.getElementsByClassName('hamburger-name-input')[0];
var ingredientsList = document.getElementsByClassName('hamburger-ingredients-container')[0].getElementsByTagName('input');
var coupon = document.getElementsByClassName('coupon')[0];

var hamburgerBasePrice = 3.00;
var ingredientsMin = 2;
var hamburgerFinalPrice = 0;

var discountPercentage = 20;
var discount = 0;

var i = 0; // checkboxes index
var j = 0; // array couponsList index

var couponsList = [
  'QBgzUb6zatFYQHwK',
  'VNoygmaAVeSVAOTT',
  'CKpzIy4IUtqU61QZ',
  'N2nSodemFesaC5wB',
  'UHsM2I8nvLptF7eE'
];

document.getElementById("hamburger-price-btn").addEventListener("click", function() {

  var ingredientsCounter = 0;
  var ingredientsSumPrice = 0;

  discount = 0; // discount reset se viene cliccato più volte il bottone

  for (i = 0; i < ingredientsList.length; i++) {
    if (ingredientsList[i].checked) {
      ingredientsSumPrice += parseFloat(ingredientsList[i].value);
      ingredientsCounter++;
    }
  }

  if (hamburgerName.value.length === 0) {
    alert('Dai un nome al tuo Hamburger')
  } else if (ingredientsCounter < ingredientsMin) {
    alert('Devi scegliere almeno due ingredienti');
  }

  if (coupon.value.length !== 0) {
    for (j = 0; j < couponsList.length; j++) {
      if (coupon.value === couponsList[j]) {
        discount = ((hamburgerBasePrice + ingredientsSumPrice) * discountPercentage) / 100;
      }
    }
  }

  hamburgerFinalPrice = hamburgerBasePrice + ingredientsSumPrice - discount;
  document.getElementsByClassName('hamburger-price')[0].innerText = hamburgerFinalPrice.toFixed(2);

});
