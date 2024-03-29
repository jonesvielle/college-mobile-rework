import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Box from '../components/box';

const UseTimer = () => {
  //   let minuteValue = 0;
  //   let secondValue = 0;
  const [minuteValue, setMinuteValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(0);
  let intervalId: string | number | undefined;

  function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    let minutes;
    let seconds;
    intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      // timerDisplay.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = 0; // Ensure timer doesn't go negative
        clearInterval(intervalId);
        // You can add additional actions here when the timer reaches zero
      }
      //   console.log('minutes: ' + minutes + ' seconds: ' + seconds);
      setMinuteValue(minutes);
      setSecondValue(seconds);
    }, 1000);
  }
  const restartTimer = (time: number) => {
    startTimer(time);
  };
  return {startTimer, minuteValue, secondValue, restartTimer};
};

export default UseTimer;
