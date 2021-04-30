document.getElementById("button-submit").addEventListener("click", function() {
  // console.log(document.querySelector('.ingredient-container').children);
  var ingredientsList = document.querySelector('.ingredient-container').children;
  var i = 0;
  for (i = 0; i < ingredientsList.length; i++) {
    // console.log('Lista ingredienti: ', ingredientsList[i].value);
    if (ingredientsList[i].checked) {
      console.log(ingredientsList[i].value);
    }
  }
});

// var testoMessaggio = 'Hai scelto ';
//
// document.getElementById("button-submit").addEventListener("click", function() {
//   testoMessaggio += ' Il valore del primo input è ' + primoInput.value + '.';
//   testoMessaggio += ' Il valore del secondo input è ' + secondoInput.value;
//   var counterCheckedElements = 0;
//   for(var i = 0; i < checkboxes.length; i++) {
//     if(checkboxes[i].checked === true) {
//       counterCheckedElements += 1;
//     }
//   }
//   testoMessaggio += ' Hai checkato ' + counterCheckedElements + ' elementi';
//   alert(testoMessaggio);
// });
