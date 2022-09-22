import {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  audioVolumeControlForest,
  audioVolumeControlRain,
  audioVolumeControlCoffee,
  audioVolumeControlBgMusic,
  audioVolumeControlFire,
  switcherButtonDark,
  switcherButtonLight
} from './elements.js'

export default function Events({ timer, controls, sounds }) {
  buttonPlay.addEventListener('click', function () {
    timer.countDown()

    controls.play()

    sounds.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    controls.stopPause()

    timer.hold()

    sounds.pressButton()
  })

  buttonIncrease.addEventListener('click', function () {
    timer.increase()

    sounds.pressButton()
  })

  buttonDecrease.addEventListener('click', function () {
    timer.decrease()

    sounds.pressButton()
  })

  /* AUDIO EVENTS */

  audioButtonForest.addEventListener('click', function () {
    controls.toggleButtonForest()

    sounds.toggleAudioForest()

    sounds.setVolumeToHalf(sounds.forestAudio, audioVolumeControlForest)
  })

  audioButtonRain.addEventListener('click', function () {
    controls.toggleButtonRain()

    sounds.toggleAudioRain()

    sounds.setVolumeToHalf(sounds.rainAudio, audioVolumeControlRain)
  })

  audioButtonCoffeeShop.addEventListener('click', function () {
    controls.toggleButtonCoffeeShop()

    sounds.toggleAudioCoffee()

    sounds.setVolumeToHalf(sounds.coffeeAudio, audioVolumeControlCoffee)
  })

  audioButtonFire.addEventListener('click', function () {
    controls.toggleButtonFire()

    sounds.setVolumeToHalf(sounds.fireAudio, audioVolumeControlFire)

    sounds.toggleAudioFire()
  })

  audioButtonBGAudio.addEventListener('click', function () {
    controls.toggleButtonBGAudio()

    sounds.toggleAudioBgAudio()

    sounds.setVolumeToHalf(sounds.bgAudio, audioVolumeControlBgMusic)
  })

  /* AUDIO VOLUME CONTROL */

  audioVolumeControlForest.addEventListener('input', function () {
    sounds.setVolume(sounds.forestAudio, audioVolumeControlForest)
  })

  audioVolumeControlForest.addEventListener('click', function (event) {
    /* CESSANDO A HIERARQUIA DO EVENTO DE CLIQUE DO BOTÃO */

    event.stopPropagation()
  })

  audioVolumeControlRain.addEventListener('input', function () {
    sounds.setVolume(sounds.rainAudio, audioVolumeControlRain)
  })

  audioVolumeControlRain.addEventListener('click', function (event) {
    /* CESSANDO A HIERARQUIA DO EVENTO DE CLIQUE DO BOTÃO */

    event.stopPropagation()
  })

  audioVolumeControlCoffee.addEventListener('input', function () {
    sounds.setVolume(sounds.coffeeAudio, audioVolumeControlCoffee)
  })

  audioVolumeControlCoffee.addEventListener('click', function (event) {
    /* CESSANDO A HIERARQUIA DO EVENTO DE CLIQUE DO BOTÃO */

    event.stopPropagation()
  })

  audioVolumeControlFire.addEventListener('input', function () {
    sounds.setVolume(sounds.fireAudio, audioVolumeControlFire)
  })

  audioVolumeControlFire.addEventListener('click', function (event) {
    /* CESSANDO A HIERARQUIA DO EVENTO DE CLIQUE DO BOTÃO */

    event.stopPropagation()
  })

  audioVolumeControlBgMusic.addEventListener('input', function () {
    sounds.setVolume(sounds.bgAudio, audioVolumeControlBgMusic)
  })

  audioVolumeControlBgMusic.addEventListener('click', function (event) {
    /* CESSANDO A HIERARQUIA DO EVENTO DE CLIQUE DO BOTÃO */

    event.stopPropagation()
  })

  switcherButtonLight.addEventListener('click', function () {
    controls.setLightTheme()
  })

  switcherButtonDark.addEventListener('click', function () {
    controls.setDarkTheme()
  })
}
