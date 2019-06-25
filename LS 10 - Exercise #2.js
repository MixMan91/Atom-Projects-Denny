async function logFetch(patrickmcneill.com/itp/urls.txt) {
  try {
    const response = await fetch(patrickmcneill.com/itp/urls.txt);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}
