import { computed, ref } from "vue";

export const sentenceToType = ref("lorem molem olem");

export const textToArray = ref(sentenceToType.value.split(" "))

export const getFirstUncompletedWorld = computed(() => {
  return textToArray.value[0]
})

export const textToObject = computed(() => {
  return sentenceToType.value.split("").map((word, index) => {
    return {
      letter: word,
      id: index,
      state: null,
    };
  });
});

export const handleUserInput = (value: string) => {
  if (value === getFirstUncompletedWorld.value) {
    textToArray.value.shift()
    return ""
  }
  return value
}