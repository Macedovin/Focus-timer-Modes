import Timer from './timer.js'

import Controls from './controls.js'

import Sounds from './sounds.js'

import Events from './events.js'

import {
  buttonPlay,
  buttonIncrease,
  buttonDecrease,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  minutesDisplay,
  secondsDisplay,
  switcherButtonLight,
  switcherButtonDark,
  aplicationPage
} from './elements.js'

/* VARIÁVEIS DE IMPORTAÇÃO -> RECEBENDO O OBJETO DA FACTORY -> MÓDULOS */

const controls = Controls({
  buttonIncrease,
  buttonDecrease,
  buttonPlay,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,

  switcherButtonLight,
  switcherButtonDark,
  aplicationPage
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetSet: controls.resetSet,
  disableButtonPlay: controls.disableButtonPlay,
  enableButtonPlay: controls.enableButtonPlay,
  hideTimeButtons: controls.hideTimeButtons,
  hideVolumeControls: controls.hideVolumeControls,
  showVolumeControls: controls.showVolumeControls
})

const sounds = Sounds()

/* EVENTS */

Events({
  timer,
  controls,
  sounds,
  Sounds
})

/* CONFERINDO O CARREGAMENTO DA PÁGINA */

window.onload = checkTheme()

function checkTheme() {
  const localStorageTheme = localStorage.getItem('focusTheme')

  if (localStorageTheme !== null && localStorageTheme === 'dark-theme') {
    aplicationPage.className = localStorageTheme

    controls.setDarkButton()
  }
}
