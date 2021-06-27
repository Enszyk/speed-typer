import { ref } from "vue";
import { LetterState } from "./speedTyperLogic"

export const sentenceToType = ref("lorem molem olem.");
export const textToArray = ref(sentenceToType.value.split(" "))
export const textToObject = ref(sentenceToType.value.split("").map((word, index) => {
  return {
    letter: word,
    id: index,
    state: LetterState.None,
  };
}))