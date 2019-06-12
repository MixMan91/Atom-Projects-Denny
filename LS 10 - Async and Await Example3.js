function slow_callback(callback) {
  setTimeout(callback, 1000);
}

console.log("Starting first operation");
slow_callback(() => {
  console.log("Starting second operation");
  slow_callback(() => {
    console.log("Starting third operation");
    slow_callback(() => console.log("All done!"));
  });
});
