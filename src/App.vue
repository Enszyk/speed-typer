<template>
  <div class="bg-gray-600 min-h-screen text-center pt-24">
    <div class="w-1/3 mx-auto text-gray-200">
      <span v-for="letter in textToObject" :key="letter.id">
        {{ letter.letter }}
      </span>
    </div>
    {{ textToArray }}
    {{ getFirstUncompletedWorld }}

    <input
      type="text"
      class="mt-10 bg-transparent outline-none text-gray-200 border-b-2 border-gray-200"
      v-model="typedText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import {
  textToArray,
  getFirstUncompletedWorld,
  textToObject,
  handleUserInput,
} from "./use/speedTyperLogic";

export default defineComponent({
  name: "App",
  setup() {
    const typedText = ref("");

    watch(typedText, (value) => {
      typedText.value = handleUserInput(value)
    });

    return {
      typedText,
      textToObject,
      textToArray,
      getFirstUncompletedWorld,
    };
  },
});
</script>
