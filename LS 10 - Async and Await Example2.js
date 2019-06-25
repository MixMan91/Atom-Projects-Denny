async function fetch_session() {
  let session = JSON.parse(
    await $.get("https://patrickmcneill.com/itp/urls.txt")
  );

  console.log("Hello " + session.user.name);
}

fetch_session();
