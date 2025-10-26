document.addEventListener('DOMContentLoaded', () => {
  // 画像ボタンを押すと再生/一時停止を切替
  document.querySelectorAll('.audio-cover-btn').forEach(btn => {
    const id = btn.getAttribute('data-audio-id');
    const audio = document.getElementById(id);
    const playIcon = btn.querySelector('.audio-playicon');
    const pauseIcon = btn.querySelector('.audio-pauseicon');

    const updateIcons = () => {
      if (audio.paused) {
        playIcon.style.opacity = '1';
        pauseIcon.style.opacity = '0';
      } else {
        playIcon.style.opacity = '0';
        pauseIcon.style.opacity = '1';
      }
    };

    btn.addEventListener('click', () => {
      if (audio.paused) {
        // 他のトラックを止める
        document.querySelectorAll('audio').forEach(a => { if (!a.paused) a.pause(); });
        audio.play();
      } else {
        audio.pause();
      }
    });

    audio.addEventListener('play', updateIcons);
    audio.addEventListener('pause', updateIcons);
    audio.addEventListener('ended', updateIcons);
    updateIcons();
  });
});
