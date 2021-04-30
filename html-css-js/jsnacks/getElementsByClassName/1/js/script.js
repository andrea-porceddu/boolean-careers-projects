var element = document.getElementsByClassName('element-class').innerHTML;
// console.log(fizz); HTMLCollection length = 5 (like an array)
var i;
for (i = 0; i < element.length; i++) {
  if (i === 2) {
    element[i].innerText = 'Buzz';
  } else {
    element[i].innerText = 'Fizz';
  }
}

// fizz.innerText = 'Buzz';
