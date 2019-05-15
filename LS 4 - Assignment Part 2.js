let my_song = [
  { note: 'A', starts_at: 0, lasts: 3 },
  { note: 'B', starts_at: 0, lasts: 3 },
  { note: 'C', starts_at: 1.5, lasts: 1.5 }
];
for (let i = 0; i < my_song.length; i++) {
  console.log('play',my_song[i]);
}
for (let i = 0; i < my_song.length; i++) {
  console.log('release',my_song[i]);
}
//play_piano(my_song);
