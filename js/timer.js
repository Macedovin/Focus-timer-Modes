import Sounds from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetSet,
  disableButtonPlay,
  hideTimeButtons
}) {
  let timerTimeOut

  function setDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')

    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  /* TIMER FUNCTION */

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)

      let seconds = Number(secondsDisplay.textContent)

      setDisplay(minutes, seconds)

      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        restart()

        Sounds().timeEnd()

        return
      }

      if (seconds <= 0) {
        seconds = 60

        /* minutesDisplay.textContent = String(minutes - 1).padStart(2, '0') */

        /* setTimerDisplay(minutes - 1, seconds) */

        --minutes
      }

      timeIsRunning()

      /* secondsDisplay.textContent = String(seconds - 1).padStart(2, '0') */

      setDisplay(minutes, seconds - 1)

      countDown()
    }, 1000)
  }

  function increase() {
    let minutes = Number(minutesDisplay.textContent)

    let seconds = Number(secondsDisplay.textContent)

    /* minutesDisplay.textContent = String(newMoreMinutes + 5).padStart(2, '0') */

    setDisplay((minutes += 5), seconds)
  }

  function decrease() {
    let minutes = Number(minutesDisplay.textContent)

    let seconds = Number(secondsDisplay.textContent)

    setDisplay((minutes -= 5), seconds)

    const minutesIsLessThanOrZeroAndHasSeconds = minutes <= 0

    if (minutesIsLessThanOrZeroAndHasSeconds) {
      setDisplay((minutes = 0), (seconds = 0))
    }
  }

  function timeIsRunning() {
    hideTimeButtons()

    disableButtonPlay()
  }

  function restart() {
    resetSet()
  }

  return {
    setDisplay,
    hold,
    countDown,
    increase,
    decrease
  }
}
