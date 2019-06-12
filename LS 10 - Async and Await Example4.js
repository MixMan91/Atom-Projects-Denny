async function await_callbacks() {
  let promises = [];

  for ( let i = 0 ; i < 3 ; i++ ) {
    console.log("Starting operation " + i);
    promises.push(slow_async());
  }

  let values = await Promise.all(promises);

  console.log("Done");
  console.log(values);
}

await_callbacks();
