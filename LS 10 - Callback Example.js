let req = new XMLHttpRequest();

req.addEventListener('load', function() {
  let info = JSON.parse(this.responseText);

  console.log("Hello, " + info.user.name);
});

req.addEventListener('error', function() {
  console.log("Whoooooo are you?");
});

req.open("GET", "/interface/sessions/1");
req.send();
