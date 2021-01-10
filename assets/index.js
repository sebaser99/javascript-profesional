import MediaPlayer, { message } from './MediaPlayer.js';
const $video = document.querySelector('video');
const $play = document.getElementById('playButton');
const player = new MediaPlayer({ el: $video });

$play.onclick = ()=> player.togglePlay();
// $play.onclick = ()=> $video.play();

console.log(message)