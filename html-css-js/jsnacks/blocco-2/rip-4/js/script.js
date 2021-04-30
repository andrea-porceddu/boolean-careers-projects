// var array = [
//   2,
//   33,
//   87,
//   23,
//   11,
//   69,
//   70,
//   43,
//   81,
//   99,
//   1024'
// ];

var array = [];
var i = 1;
var arrayMaxElements = 10;
var maxRandom = 100;
var minRandom = 1;
for (i = 1; i <= arrayMaxElements; i++) {
    array.push(Math.floor(Math.random() * (maxRandom - minRandom) + minRandom)); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
console.log(array);

var j = 0;
var sum = 0;
for (j = 0; j < array.length; j++) {
  if (j % 2 !== 0) {
    sum += array[j];
  }
}
console.log(sum);
