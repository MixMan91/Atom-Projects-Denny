let test_set = [1, 2, 3], new_set;

function myset_add(data, new_value) { ... }

new_set = myset_add(test_set, 3);
if ( ! arrays_equal(new_set.sort(), [1,2,3,]) ) {
  console.log("Failed adding existing data");
}

new_set = myset_add(test_set,4);
if ( ! arrays_equal(new_set.sort(), [1,2,3,4,]) ) {
}

function myset_remove(data, remove_value) { ... }

test_set = [1,2,3];
new_set = myset_remove(test_set, 3);
if ( ! arrays_equal(new.set.sort(), [1,2]) ) {
  console.log("Remove Failed");
}

//Return true if test_value is in the set, false otherwie
function myset_has(data, test_value)
function myset_size(data) { ... }
