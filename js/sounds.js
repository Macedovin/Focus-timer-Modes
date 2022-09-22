export default function Sounds() {
  const buttonPressAudio = new Audio('./sounds/button_press.wav')

  const kitchenTimer = new Audio('./sounds/kitchen_timer.mp3')

  const forestAudio = new Audio('./sounds/floresta.wav')

  const rainAudio = new Audio('./sounds/chuva.wav')

  const coffeeAudio = new Audio('./sounds/cafeteria.wav')

  const fireAudio = new Audio('./sounds/lareira.wav')

  const bgAudio = new Audio('./sounds/bg_audio.mp3')

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function toggleAudioPlay(myAudio) {
    let isPaused = myAudio.paused

    if (isPaused) {
      myAudio.play()
    } else {
      myAudio.pause()
    }
  }

  function toggleAudioForest() {
    forestAudio.loop = true

    toggleAudioPlay(forestAudio)

    rainAudio.pause()

    coffeeAudio.pause()

    fireAudio.pause()

    bgAudio.pause()
  }

  function toggleAudioRain() {
    rainAudio.loop = true

    toggleAudioPlay(rainAudio)

    forestAudio.pause()

    coffeeAudio.pause()

    fireAudio.pause()

    bgAudio.pause()
  }

  function toggleAudioCoffee() {
    coffeeAudio.loop = true

    toggleAudioPlay(coffeeAudio)

    rainAudio.pause()

    forestAudio.pause()

    fireAudio.pause()

    bgAudio.pause()
  }

  function toggleAudioFire() {
    fireAudio.loop = true

    toggleAudioPlay(fireAudio)

    rainAudio.pause()

    coffeeAudio.pause()

    forestAudio.pause()

    bgAudio.pause()
  }

  function toggleAudioBgAudio() {
    bgAudio.loop = true

    toggleAudioPlay(bgAudio)

    rainAudio.pause()

    coffeeAudio.pause()

    fireAudio.pause()

    forestAudio.pause()
  }

  function setVolumeToHalf(myAudio, audioVolumeControl) {
    audioVolumeControl.value = 0.5

    myAudio.volume = audioVolumeControl.value
  }

  function setVolume(myAudio, audioVolumeControl) {
    myAudio.volume = audioVolumeControl.value
  }

  return {
    pressButton,
    timeEnd,
    forestAudio,
    bgAudio,
    coffeeAudio,
    fireAudio,
    rainAudio,
    toggleAudioPlay,
    setVolume,
    setVolumeToHalf,
    toggleAudioForest,
    toggleAudioRain,
    toggleAudioCoffee,
    toggleAudioBgAudio,
    toggleAudioFire
  }
}
