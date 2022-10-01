import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HandPalm, Play } from "phosphor-react";
import { useEffect, useState } from "react";
import * as zod from "zod";
import { differenceInSeconds } from "date-fns";
import {
  StartCountdownButton,
  StopCountdownButton,
  MinutesAmountInput,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  TaskInput,
} from "./styles";

/* Schema */
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Indique um nome para tarefa'),
  minutesAmount: zod.number()
    .min(1, 'O minimo para tarefa é 1 minutos')
    .max(60, 'O maximo para tarefa é 60 minutos'),
});

/* O zod cria a interface necessária pelo schema  */
type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface ICycle {
  id: string;
  task: string;
  startDate: Date;
  finishedDate?: Date;
  minutesAmount: number;
  interruptedDate?: Date;
};

export function Home() {
  const [cycles, setCycles] = useState<ICycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, reset } = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  function handleCreateNewCycle(data: INewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    };

    setCycles((precedingCycles) => [...precedingCycles, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  };

  function handleInterruptCycle() {
    setCycles((stateCycle) =>
      stateCycle.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );
    setActiveCycleId(null);
  };

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,);

        if (secondsDifference >= totalSeconds) {
          setCycles((stateCycle) =>
            stateCycle.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle;
              }
            }),
          );
          setAmountSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondsPassed(secondsDifference);
        };
      }, 1000)
    };

    return () => {
      clearInterval(interval);
    }
  }, [activeCycle]);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  const tasks = watch('task');
  const isSubmitDisabled = !tasks;

  useEffect(() => {
    if (activeCycle) {
      document.title = `Pomodoro | ${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <HomeContainer>
      <form
        action=""
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <FormContainer>

          <label>Vou trabalhar em</label>
          <TaskInput
            id="task"
            disabled={!!activeCycle}
            placeholder="Nome do seu projeto"
            {...register('task')}
          />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            min={1}
            max={60}
            step={5}
            type="number"
            placeholder="00"
            id="minutesAmount"
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>

        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountdownButton
            type="button"
            onClick={handleInterruptCycle}
          >
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            type="submit"
            disabled={isSubmitDisabled}
          >
            <Play size={24} />
            Começar
          </StartCountdownButton>)}

      </form>
    </HomeContainer >
  );
};