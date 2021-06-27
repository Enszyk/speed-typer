<template>
  <div class="bg-gray-600 min-h-screen text-center pt-24">
    <div class="w-1/3 mx-auto text-gray-200">
      <span v-for="letter in textToObject" :key="letter.id">
        {{letter.letter}}
      </span>
    </div>
    {{textToArray}}
    {{getFirstUncompletedWorld}}

    <input
      type="text"
      class="mt-10 bg-transparent outline-none text-gray-200 border-b-2 border-gray-200"
      v-model="typedText"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const typedText = ref("");

    const text = ref("lorem molem olem");

    const textToArray = ref(text.value.split(" "))

    const getFirstUncompletedWorld = computed(() => {
      return textToArray.value[0]
    })

    const textToObject = computed(() => {
      return text.value.split("").map((word, index) => {
        return {
          letter: word,
          id: index,
          state: null,
        };
      });
    });



    watch(typedText, (value) => {
      if (value === getFirstUncompletedWorld.value){
        textToArray.value.shift()
        typedText.value = ""
      }
    })


    return {
      text,
      typedText,
      textToObject,
      textToArray,
      getFirstUncompletedWorld
    };
  },
});
</script>
