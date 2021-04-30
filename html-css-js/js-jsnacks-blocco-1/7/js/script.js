var array = [];
i = 1;
do {
  var pow = array.push(Math.pow(2, i));
  i++;
} while (i <= 1000);
console.log(array);
