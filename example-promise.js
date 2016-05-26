// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City Not Found');
// }
//
// getTempCallback('Florida', function(err, temp) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('success', temp);
//   }
// })
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('City Not Found');
//   })
// }
//
// getTempPromise('Florida').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err)
// });







// function addPromise (a, b) {
//   return new Promise(function(resolve, reject) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       resolve(a + b);
//     } else {
//       reject('Not a number');
//     }
//   });
// }
//
// addPromise(2, 5).then(function(sum) {
//   console.log('Success', sum);
// }, function(err) {
//   console.log('error;', err)
// });
//
// addPromise('James', 'Trevor').then(function() {
//   console.log('Success', sum);
// }, function(err) {
//   setTimeout(function(){
//     console.log('error', err);
//   }, 2000);
// });
