export const songBlockGenerator = ({ song }) => {
  const songContainer = document.querySelector('.lyrics_list');

  // const player = `
  //   <audio 
  //     id='${song.name}' 
  //     controls 
  //     src="audio/${song.link}.mp3" 
  //     preload="auto"
  //   ></audio>
  // `;

  const lyricsLines = song.textLinesHindi.map((el, i) => {
    return `
    <div class="song_line">
      <div>
        <a
          class="55"
          href="//${song.link}?rel=1&autoplay=1&start=${song.linesStart[i]}"
          target="rez"
          >${song.textLinesHindi[i]}</a
        >
      </div>
    </div>
    `;
  });

  songContainer.innerHTML = lyricsLines.join(' ');
};
// <div class="song_line">
//   <div>
//     <button class="word" id="${
//       song.textLinesTranscripton[i].split(' ').join('_') + i
//     }">${el}</button
//     >
//     <div>${song.textLinesTranscripton[i]}</div>
//   </div>
//   <div>${song.textLinesTranslaton[i]}</div>
// </div>