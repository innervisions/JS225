// function countdown(count) {
//   (function (n) {
//     for (let i = n; i >= 0; i -= 1) {
//       console.log(i);
//     }

//     console.log('Done!');
//   })(count);
// }

function countdown(count) {
  (function recursiveSub(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveSub(n - 1);
    }
  })(count);
}

countdown(7);
