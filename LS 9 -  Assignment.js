class MediaPlaylist{
  constructor(name, duration){
    this.myName=name;
    this.myDuration=duration;
  }
}
class Music extends MediaPlaylist{
  constructor(name, duration, artist){
    super(name,duration);
    this._myArtist = artist;
  }
  playing(){
    console.log('Song Name: ' + this.myName);
    console.log('Duration: ' + this.myDuration);
    console.log('Artist: ' + this._myArtist);
  }
  next(){
    console.log(myMovies.myName + ' is playing next.');
  }
}
class Movies extends MediaPlaylist{
  constructor(name, duration, rating){
    super(name, duration);
    this._myRating = rating;
  }
  playing(){
    console.log('Song Name: ' + this.myName);
    console.log('Duration: ' + this.myDuration);
    console.log('Rating: ' + this._myRating);
  }
  next(){
    console.log(myPodcasts.myName + ' is playing next.');
  }
}
class Podcasts extends MediaPlaylist{
  constructor(name, duration, theme){
    super(name, duration);
    this._myTheme = theme;
  }
  playing(){
    console.log('Song Name: ' + this.myName);
    console.log('Duration: ' + this.myDuration);
    console.log('Theme: ' + this._myTheme);
  }
}
let myMusic = new Music ('Yellow Submarine', '2:28', 'The Beatles');
let myMovies = new Movies ('The Avengers: End Game', '3h 2m', 'Rated PG-13');
let myPodcasts = new Podcasts ('How to Code', '15:42', 'Javascript');

myMusic.playing();
console.log('');
myMusic.next();
console.log('');
myMovies.playing();
console.log('');
myMovies.next();
console.log('');
myPodcasts.playing();
console.log('');
