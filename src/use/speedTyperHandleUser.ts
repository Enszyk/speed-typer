import { ref } from "vue"
import { textToArray } from "./speedTyperInitGame"
import { calculateInGameFeedback, getFirstUncompletedWorld, wordsMatch } from "./speedTyperLogic"

const writtenTextCopy = ref("")
export const writtenText = ref("")
export const maxWordsTyped = ref(0)

export const handleUserInput = (value: string): string => {
  writtenText.value = writtenTextCopy.value + value

  maxWordsTyped.value = Math.max(writtenText.value.length, maxWordsTyped.value)

  calculateInGameFeedback()
  if (wordsMatch(value, getFirstUncompletedWorld.value)) {
    textToArray.value.shift()
    writtenTextCopy.value += value
    return ""
  }
  return value
}