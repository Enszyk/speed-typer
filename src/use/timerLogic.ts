import { ref } from "vue";

const interval = ref(0);

const incerementTime = () => {
  time.value = (parseFloat(time.value) + 0.01).toFixed(2)
}

export const time = ref('0');

export const startTimer = () => {
  interval.value = setInterval(() => (incerementTime()), 10);
};

export const stopTimer = () => {
  clearInterval(interval.value)
}