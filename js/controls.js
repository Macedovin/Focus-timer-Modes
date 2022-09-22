export default function Controls({
  buttonIncrease,
  buttonDecrease,
  buttonPlay,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  switcherButtonDark,
  switcherButtonLight,
  aplicationPage
}) {
  function play() {
    enableButtonPlay()
  }

  function stopPause() {
    enableButtonPlay()

    addTimeButtons()
  }

  function resetSet() {
    buttonIncrease.classList.remove('hide')
    buttonDecrease.classList.remove('hide')
  }

  function hideTimeButtons() {
    buttonIncrease.classList.add('hide')
    buttonDecrease.classList.add('hide')
  }

  function addTimeButtons() {
    buttonDecrease.classList.remove('hide')
    buttonIncrease.classList.remove('hide')
  }

  function enableButtonPlay() {
    buttonPlay.disabled = false
  }

  function disableButtonPlay() {
    buttonPlay.disabled = true
  }

  function toggleButtonForest() {
    audioButtonRain.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonForest.classList.toggle('chosen')
  }

  function toggleButtonRain() {
    audioButtonForest.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonRain.classList.toggle('chosen')
  }

  function toggleButtonCoffeeShop() {
    audioButtonForest.classList.remove('chosen')

    audioButtonRain.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonCoffeeShop.classList.toggle('chosen')
  }

  function toggleButtonFire() {
    audioButtonForest.classList.remove('chosen')

    audioButtonRain.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonFire.classList.toggle('chosen')
  }

  function toggleButtonBGAudio() {
    audioButtonForest.classList.remove('chosen')

    audioButtonRain.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.toggle('chosen')
  }

  function setLightTheme() {
    switcherButtonLight.classList.add('hide')
    switcherButtonDark.classList.remove('hide')

    aplicationPage.classList.add('dark-theme')
    aplicationPage.classList.remove('light-theme')

    localStorage.setItem('focusTheme', 'dark-theme')
  }

  function setDarkButton() {
    switcherButtonLight.classList.add('hide')
    switcherButtonDark.classList.remove('hide')
  }

  function setDarkTheme() {
    switcherButtonDark.classList.add('hide')
    switcherButtonLight.classList.remove('hide')

    aplicationPage.classList.remove('dark-theme')
    aplicationPage.classList.add('light-theme')

    localStorage.setItem('focusTheme', 'light-theme')
  }

  return {
    play,
    stopPause,
    resetSet,
    hideTimeButtons,
    disableButtonPlay,
    enableButtonPlay,
    addTimeButtons,
    toggleButtonForest,
    toggleButtonRain,
    toggleButtonCoffeeShop,
    toggleButtonFire,
    toggleButtonBGAudio,
    setLightTheme,
    setDarkTheme,
    setDarkButton
  }
}
