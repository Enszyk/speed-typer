import { ref } from "vue";

export enum LetterState {
  None = 0,
  Wrong = -1,
  Correct = 1,
}

export const sentenceToType = ref("lorem molem olem.");
export const textToArray = ref(sentenceToType.value.split(" "))
export const textToObject = ref(sentenceToType.value.split("").map((word, index) => {
  return {
    letter: word,
    id: index,
    state: LetterState.None,
  };
}))