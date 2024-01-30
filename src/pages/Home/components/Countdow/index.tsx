import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../../../context/CyclesContext";

export function Countdown() {

  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
    markCurrentCycleAsFinished
  } = useContext(CyclesContext);

  const totalTimeInSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalTimeInSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  const isMinutesZero = minutes[0] === '0' && minutes[1] === '0'
  const isSecondsZero = seconds[0] === '0' 
  const isTimeInCountdown = isMinutesZero && isSecondsZero && !!activeCycle
  
  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        );

        if (secondsDifference >= totalTimeInSeconds) {
          markCurrentCycleAsFinished();
          setSecondsPassed(totalTimeInSeconds);
          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        };
      }, 1000)
    };

    return () => {
      clearInterval(interval);
    }
  }, [activeCycle, totalTimeInSeconds, activeCycleId, markCurrentCycleAsFinished]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `Pomodoro | ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer isTimeInCountdown={isTimeInCountdown}>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span className="timeInCountdown">{seconds[1]}</span>
    </CountdownContainer>
  );
};
