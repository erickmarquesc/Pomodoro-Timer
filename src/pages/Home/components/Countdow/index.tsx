import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CyclesContext } from '../../../../context/CyclesContext'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
    markCurrentCycleAsFinished
  } = useContext(CyclesContext)

  /* Calcula o tempo total em segundos com base no ciclo ativo.
   * Se o ciclo estiver ativo, multiplica a quantidade de minutos do ciclo por 60 (segundos por minuto).
   * Em seguida, calcula os segundos restantes subtraindo a quantidade de segundos passados do tempo total.
   * Define o tempo total e os segundos restantes como 0 se o ciclo não estiver ativo.
  */ 
  const totalTimeInSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalTimeInSeconds - amountSecondsPassed : 0

  // Converte os segundos restantes em minutos e segundos.
  // Calcula a quantidade de minutos arredondando para baixo a divisão dos segundos totais por 60.
  const minutesAmount = Math.floor(currentSeconds / 60)

  // Calcula a quantidade de segundos restantes após a conversão para minutos.
  // Usa o operador de módulo para obter o restante da divisão dos segundos totais por 60.
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const isMinutesZero = minutes[0] === '0' && minutes[1] === '0'
  const isSecondsZero = seconds[0] === '0' 
  const isTimeInCountdown = isMinutesZero && isSecondsZero && !!activeCycle
  
  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalTimeInSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalTimeInSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalTimeInSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed])

  useEffect(() => {
    if (activeCycle) {
      document.title = `Pomodoro | ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer isTimeInCountdown={isTimeInCountdown}>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span className="timeInCountdown">{seconds[1]}</span>
    </CountdownContainer>
  )
}
