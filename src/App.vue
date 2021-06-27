<template>
  <div class="bg-gray-600 min-h-screen text-center pt-24">
    <div class="w-1/3 mx-auto text-gray-200">
      <span v-for="letter in textToObject" :key="letter.id">
        {{ letter.letter }}
      </span>
    </div>
    <div v-for="letter in textToObject" :key="letter.id">
      {{ letter.letter }}
      {{ letter.id }}
      {{ letter.state }}
    </div>
    <input
      type="text"
      class="mt-10 bg-transparent outline-none text-gray-200 border-b-2 border-gray-200"
      v-model="typedText"
    />
    {{ writtenText }}
    {{ maxWordsTyped }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { getFirstUncompletedWorld } from "./use/speedTyperLogic";
import { textToArray, textToObject } from "./use/speedTyperInitGame";
import {
  handleUserInput,
  writtenText,
  maxWordsTyped,
} from "./use/speedTyperHandleUser";

export default defineComponent({
  name: "App",
  setup() {
    const typedText = ref("");

    watch(typedText, (value) => {
      typedText.value = handleUserInput(value);
    });

    return {
      typedText,
      textToObject,
      textToArray,
      getFirstUncompletedWorld,
      writtenText,
      maxWordsTyped,
    };
  },
});
</script>
