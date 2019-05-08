function play_song(mp3_url, output_method) {
  let data;

  while ( true ) {
    data = fetch_next_part(mp3_url);

    if ( ! data ) break;

    output_method(data);
  }
}

function play_audio(raw_mp3_data) {
     // actually make the sound go
}

function save_to_disk(raw_mp3_data) {
   // save the raw data to a local file
}

 play_song("http://itunes.com/schoolhouse_rock.mp3", play_audio);
 play_song("http://itunes.com/schoolhouse_rock.mp3", save_to_disk);
 
