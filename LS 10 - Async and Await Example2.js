async function fetch_session() {
  let session = JSON.parse(
    await $.get("/interface/sessions/1")
  );

  console.log("Hello " + session.user.name);
}

fetch_session();
