function makeList() {
  let items = [];

  return function (newItem) {
    let index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + ' added!');
      } else {
        items.splice(index, 1);
        console.log(newItem + ' removed!');
      }
    } else {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function (item) {
          console.log(item);
        });
      }
    }
  };
}

let list = makeList();
list();
// The list is empty.

list('make breakfast');
// make breakfast added!

list('read book');
// read book added!

list();
// make breakfast
// read book

list('make breakfast');
// make breakfast removed!

list();
// read book
