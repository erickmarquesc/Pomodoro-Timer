import { useContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { HandPalm, Play } from 'phosphor-react'

import {
  StartCountdownButton,
  StopCountdownButton,
  ChallengeContainer,
  HomeContainer,
  FormContent,
} from './styles'

import { CyclesContext } from '../../context/CyclesContext'

import { INewCycleFormData, newCycleFormValidationSchema } from './zodValidationSchema'
import { zodResolver } from '@hookform/resolvers/zod'

import { ChallengeList, IChallengeListProps } from '../../utils/challengeList'
import { RangeMessage } from './components/RangeMessage'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdow'

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, reset, formState: { errors } } = newCycleForm

  function handleCreateNewCycle(data: INewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  function handleCreateNewCycleChallenge(data: INewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const tasks = watch('task')
  const isSubmitDisabled = !tasks

  const minutesAmountMessageErro = errors.minutesAmount?.message

  const [challenge, setChallenge] = useState<IChallengeListProps>({} as IChallengeListProps)

  useEffect(() => {
    const randomChallenge = ChallengeList[Math.floor(Math.random() * ChallengeList.length)]
    setChallenge(randomChallenge)
  }, [activeCycle])

  return (
    <HomeContainer>
      <form
        action=""
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <FormContent>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <RangeMessage minutesAmountMessageErro={minutesAmountMessageErro} />

          <Countdown />

          {activeCycle ? (
            <StopCountdownButton
              type="button"
              onClick={interruptCurrentCycle}
            >
              <HandPalm size={24} />
              Interromper tarefa
            </StopCountdownButton>
          ) : (
            <StartCountdownButton
              type="submit"
              disabled={isSubmitDisabled}
            >
              <Play size={24} />
              Começar
            </StartCountdownButton>)}
        </FormContent>

        <ChallengeContainer>
          {challenge && (
            <>
              <section>
                <h1>Tempo {challenge.cycle?.minutesAmount} minutos</h1>
              </section>
              <img src={challenge.img} alt="" />
              <h2>{challenge.title}</h2>
              <strong>{challenge.description}</strong>
              <StartCountdownButton
                type="submit"
                disabled={!!activeCycle}
                onClick={() => handleCreateNewCycleChallenge(challenge.cycle)}
              >
                Aceitar desafio
              </StartCountdownButton>
            </>
          )}
        </ChallengeContainer>

      </form>
    </HomeContainer >
  )
}
