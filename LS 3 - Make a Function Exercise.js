//function identify (lastname,firstname,birthYr)
  let lastname = "Stevens"
  let firstname = "Luke"
  let birthYr = 1981
  let currentYr = 2019
  let snoopDoggAge = 47

  console.log("Hello, " + firstname,lastname + ".");
  console.log("You are about " + (currentYr-birthYr) + " old.");

  let finalAge = (currentYr-birthYr)
  if (finalAge < snoopDoggAge) {
    console.log("That's younger than Snoop Dogg.");
  } else {
    (finalAge > snoopDoggAge);
    console.log("That's older than Snoop Dogg.");
  }
