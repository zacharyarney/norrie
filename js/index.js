const audio = document.querySelector('audio');
const playButton = document.querySelector('.audio-play-button');
let playState = 'pause';

playButton.addEventListener('click', () => {
  if (playState === 'pause') {
    audio.play();
    playState = 'play';
    playButton.innerHTML = '&#9646;&#9646;';
  } else {
    audio.pause();
    playState = 'pause';
    playButton.innerHTML = '&#9654;';
  }
});
