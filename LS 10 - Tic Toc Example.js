let i = 0;

let handle = setInterval(() => {
  if ( i % 2 === 0 ) {
    console.log("Tick");
  } else {
    console.log("Tock");
  }
  i++;

  if ( i >= 10 ) {
    clearInterval(handle);
  }
}, 1000);
