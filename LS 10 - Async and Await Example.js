fs.readFile('input_file', (err, data) => {
  if ( err ) throw "Couldn't read";
  process(data, (err, result) => {
    if ( err ) throw "Process error";

    fs.writeFile('output_file', result, (err) => {
      if ( err ) {
        throw "Couldn't write";
      }
    });
  });
});
