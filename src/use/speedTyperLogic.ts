import { computed } from "vue";
import { correctWordsLength, maxWordsTyped, writtenText } from "./speedTyperHandleUser";
import { LetterState, textToArray, textToObject } from "./speedTyperInitGame";


// Todo change naming
export const getFirstUncompletedWorld = computed(() => {
  return textToArray.value[0]
})


const isLastWord = computed(() => textToArray.value.length === 1)
export const wordsMatch = (typedWord: string, correctWord: string): boolean => {
  if (isLastWord.value)
    return typedWord === correctWord
  return typedWord.slice(-1) === " " && typedWord.slice(0, -1) === correctWord
}


export const calculateInGameFeedback = (): void => {
  let isWrong = false

  const iterateTo = Math.min(textToObject.value.length, maxWordsTyped.value)
  for (let i = correctWordsLength.value; i < iterateTo; i++) {
    if (writtenText.value.length <= i)
      textToObject.value[i].state = LetterState.None
    else if (isWrong || writtenText.value[i] !== textToObject.value[i].letter) {
      textToObject.value[i].state = LetterState.Wrong
      isWrong = true
    }
    else
      textToObject.value[i].state = LetterState.Correct
  }
}


