const SoundPlayer = require("./sound-player");

module.exports = class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
    console.log("CHAN 1", SoundPlayer);
    console.log("CHAN 2", this.soundPlayer);
  }

  playSomethingCool() {
    const coolSoundFileName = "song.mp3";
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }
};
