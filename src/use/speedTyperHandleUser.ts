import { computed, ref } from "vue"
import { textToArray } from "./speedTyperInitGame"
import { calculateInGameFeedback, getFirstUncompletedWorld, wordsMatch, gameEnded } from "./speedTyperLogic"
import { startTimer, stopTimer, timerIsRunning } from "./timerLogic"

const writtenTextCopy = ref("")

export const writtenText = ref("")
export const maxWordsTyped = ref(0)

// Used as bottom boundary when checking letters correctness
export const correctWordsLength = computed(() => writtenTextCopy.value.length)

export const handleUserInput = (value: string): string => {

  if (!timerIsRunning.value && !gameEnded.value)
    startTimer()

  writtenText.value = writtenTextCopy.value + value
  maxWordsTyped.value = Math.max(writtenText.value.length, maxWordsTyped.value)

  calculateInGameFeedback()
  if (wordsMatch(value, getFirstUncompletedWorld.value)) {
    textToArray.value.shift()
    writtenTextCopy.value += value

    if (!getFirstUncompletedWorld.value) {
      stopTimer()
      gameEnded.value=true
    }

    return ""
  }
  return value
}