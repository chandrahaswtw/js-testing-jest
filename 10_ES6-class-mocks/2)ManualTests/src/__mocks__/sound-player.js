// Import this named export into your test file:
const mockPlaySoundFile = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return { playSoundFile: mockPlaySoundFile };
});

const myModule = (module.exports = mock);
myModule.mockPlaySoundFile = mockPlaySoundFile;
