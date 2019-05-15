let test_set = [1, 2, 3],new_set;
console.log(test_set);

myset_add(test_set, 4);
function myset_add(data, new_value) {
  for (let i = 0; i < data.length; i++){
    console.log(data[i]);
    console.log(new_value);
    return test_set
  }
  test_set.push(data);
  return test_set;
}


// new_set = myset_add(test_set, 3);
// if ( ! arrays_equal(new_set.sort(), [1,2,3]) ) {
//   console.log("Failed adding existing data");
// }
//
// new_set = myset_add(test_set, 4);
// if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
//   console.log("Failed adding new data");
// }
//
// function myset_remove(data, remove_value) { ... }
//
// test_set = [1,2,3];
// new_set = myset_remove(test_set, 3);
// if ( ! arrays_equal(new_set.sort(), [1,2]) ) {
//   console.log("Remove failed");
// }
//
//
// // Return true if test_value is in the set, false otherwise
// function myset_has(data, test_value) { ... }
//
// function myset_size(data) { ... }
//
//
//
