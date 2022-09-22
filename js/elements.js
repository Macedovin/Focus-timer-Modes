/* VARIÁVEIS */

/* TIMER BUTTONS */

const buttonPlay = document.querySelector('.play')

const buttonStop = document.querySelector('.stop')

const buttonIncrease = document.querySelector('.increase')

const buttonDecrease = document.querySelector('.decrease')

/*  AUDIO BUTTONS */

const audioButtonForest = document.querySelector('button.forest')

const audioButtonRain = document.querySelector(`button.rain`)

const audioButtonCoffeeShop = document.querySelector('button.coffee-shop')

const audioButtonFire = document.querySelector('button.fire')

const audioButtonBGAudio = document.querySelector('button.bg-music')

console.log(audioButtonForest, audioButtonRain)

/* VOLUME CONTROL */

const audioVolumeControlForest = document.querySelector('#forest-audio-volume')

const audioVolumeControlRain = document.querySelector('#rain-audio-volume')

console.log(audioVolumeControlRain)

const audioVolumeControlCoffee = document.querySelector('#coffee-audio-volume')

const audioVolumeControlFire = document.querySelector('#fire-audio-volume')

const audioVolumeControlBgMusic = document.querySelector(
  '#bgAudio-audio-volume'
)

/* SETTTING TIMER CONTROLLERS */

const minutesDisplay = document.querySelector('#timer .minutes')

let minutes = Number(minutesDisplay.textContent)

const secondsDisplay = document.querySelector('#timer .seconds')

let seconds = Number(secondsDisplay.textContent)

/* THEME CHANGER */

const switcherButtonLight = document.querySelector('header button.light-theme')

const switcherButtonDark = document.querySelector('header button.dark-theme')

const aplicationPage = document.querySelector('html')

/* console.log(window) */

export {
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
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds,
  switcherButtonDark,
  switcherButtonLight,
  aplicationPage
}
