import { ref } from "vue";

const interval = ref(0);

export const timerIsRunning = ref(false)

const incerementTime = () => {
  time.value = (parseFloat(time.value) + 0.01).toFixed(2)
}

export const time = ref('0.00');

export const startTimer = () => {
  interval.value = setInterval(() => (incerementTime()), 10);
  timerIsRunning.value = true
};

export const stopTimer = () => {
  clearInterval(interval.value)
  timerIsRunning.value = false
}