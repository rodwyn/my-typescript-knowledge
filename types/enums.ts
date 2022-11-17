(() => {
  enum AudioLevel {
    min = 10,
    medium = 50,
    max = 100
  }

  let currentAudio: AudioLevel = AudioLevel.max; 
  console.log(currentAudio);
})();