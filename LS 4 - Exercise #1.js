let my_arr = [1, 2, 3, 4, 5],
    total = 0

  for (let i = 0; i < my_arr.length; i++) {
    total += my_arr[i];
  }

  console.log("The average of " + my_arr + " is " + total/my_arr.length);
