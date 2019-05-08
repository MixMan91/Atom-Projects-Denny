//window.my_first_name = 'Patrick';
let my_first_name = 'Patrick';
let my_last_name = 'McNeill';

function print_name(num_times) {
  for ( let i = 0; i < num_times ; i++ ) {
    console.log(my_first_name + ' ' +
my_last_name);
  }
}

print_name(4);
