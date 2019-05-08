let valid_users = new Set ();

valid_users.add("Bob");
valid_users.add("Bob");
valid_users.add("Carol")
valid_users.delete("Bob");

console.log(valid_users);
//"Set { 'Carol' }"
