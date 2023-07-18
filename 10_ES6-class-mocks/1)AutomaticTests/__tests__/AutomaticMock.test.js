const SoundPlayer = require("./../src/sound-player");
const SoundPlayerConsumer = require("./../src/sound-player-consumer");

// Mention outside describe
// SoundPlayer is now a mock constructor
jest.mock("./../src/sound-player");

// This is a good practice to clear the mocks before each test.
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});

describe("Automatic Mock", () => {
  it("We can check if the consumer called the class constructor", () => {
    const playerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
  });

  it("Check the mock clear", () => {
    // Since we are clearing the mock, it will be set to 0 again.
    expect(SoundPlayer).toHaveBeenCalledTimes(0);
    const playerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
  });

  it("We can check if the consumer called a method on the class instance", () => {
    const playerConsumer = new SoundPlayerConsumer();

    playerConsumer.playSomethingCool();

    // We are fetching the mock instance and checking for functions inside.
    // When const playerConsumer = new SoundPlayerConsumer(); this internally calls the mock constructor (SoundPlayer) and an instance gets created.
    const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
    const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
    expect(mockPlaySoundFile).toHaveBeenCalledWith("song.mp3");
    expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
  });
});
