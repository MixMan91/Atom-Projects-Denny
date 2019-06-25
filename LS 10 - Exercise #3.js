function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}
async function asyncCall() {
  console.log('This issue will be resolved in 2000 millieseconds');
  var result = await delay(1000);
  console.log(result);
}

asyncCall();
