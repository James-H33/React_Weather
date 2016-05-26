// var names = ['James', 'Trevor', 'Justin'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// //ES6
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('james'));

// var person = {
//   name: 'James',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }
//
// person.greet();



// Challenge Area

// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1, 2));

// addStatement
var addStatement = (a, b) => {
  return a + b;
}

// console.log(addStatement(1, 2));

// addExpression

var addExpression = (a, b) => a + b;

console.log(addExpression(5, 3));
