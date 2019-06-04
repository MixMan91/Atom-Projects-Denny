$.ajax({
  url: "https://itp.patrickmcneill.com/data/persons",
  method: "POST",
  headers: { key: "1234" },
  data: {
    name: "Patrick",
    email: "pmcneill@berklee.edu"
  },
  success: function(result) {
    console.log("Person's ID is " + result.id);
  },
  error: function(err) {
    console.log("Failed: " + err.responseText);
  }
});
