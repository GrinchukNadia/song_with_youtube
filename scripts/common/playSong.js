export const playSong = (lesson) => {
  const secondSong = document.querySelector(`#${lesson.song.name}`);

  secondSong.addEventListener('timeupdate', () => {
    const timeInMoment = secondSong.currentTime;
    if (
      +timeInMoment.toFixed(1) === lesson.song.end ||
      +timeInMoment.toFixed(1) === lesson.song.end + 0.1 ||
      +timeInMoment.toFixed(1) === lesson.song.end + 0.2
    ) {
      secondSong.pause();
    }
  });

  const blockWithWords = document.querySelector('.lyrics_list');

  blockWithWords.addEventListener('click', (event) => {
    if (event.target.localName === 'button') {
      const timeId = event.target.id.slice(-1);
      secondSong.currentTime = lesson.song.linesStart[timeId];
      secondSong.play();
    }
  });
};