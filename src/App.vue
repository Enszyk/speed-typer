<template>
  <div class="bg-gray-600 min-h-screen text-center pt-24">
    <div class="w-1/3 mx-auto text-gray-200">
      <span
        v-for="letter in textToObject"
        :key="letter.id"
        :class="letterClass(letter.state)"
      >
        {{ letter.letter }}
      </span>
    </div>
    <input
      type="text"
      class="mt-10 bg-transparent outline-none text-gray-200 border-b-2 border-gray-200"
      v-model="typedText"
    />
    <br>
    <button @click="startTimer" class="text-gray-50 mr-10">Start</button>
    <button @click="stopTimer" class="text-gray-50">Stop</button>
    <br>
    {{ time }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { getFirstUncompletedWorld } from "./use/speedTyperLogic";
import {
  textToArray,
  textToObject,
  LetterState,
} from "./use/speedTyperInitGame";
import {
  handleUserInput,
  writtenText,
  maxWordsTyped,
} from "./use/speedTyperHandleUser";

export default defineComponent({
  name: "App",
  setup() {
    const typedText = ref("");
    const time = ref('0');
    const interval = ref(0);

    watch(typedText, (value) => {
      typedText.value = handleUserInput(value);
    });

    const letterClass = (state: LetterState) => {
      switch (state) {
        case LetterState.Correct:
          return "text-green-500";
        case LetterState.Wrong:
          return "text-gray-200 bg-red-500";
      }
    };

    const incerementTime = () => {
      time.value = (parseFloat(time.value) + 0.01).toFixed(2)
    }

    const startTimer = () => {
      interval.value = setInterval(() => (incerementTime()), 10);
    };

    const stopTimer = () => {
      clearInterval(interval.value)
    }

    return {
      typedText,
      textToObject,
      textToArray,
      getFirstUncompletedWorld,
      writtenText,
      maxWordsTyped,
      letterClass,
      time,
      startTimer,
      stopTimer,
    };
  },
});
</script>
