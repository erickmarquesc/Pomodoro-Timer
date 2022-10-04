import { StartCountdownButton, StopCountdownButton, HomeContainer, } from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Countdown } from "./components/Countdow";
import { HandPalm, Play } from "phosphor-react";
import { createContext, useState } from "react";
import * as zod from "zod";

interface ICycle {
  id: string;
  task: string;
  startDate: Date;
  finishedDate?: Date;
  minutesAmount: number;
  interruptedDate?: Date;
};

interface ICycleContextType {
  amountSecondsPassed: number;
  activeCycleId: string | null;
  activeCycle: ICycle | undefined;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
};

export const CyclesContext = createContext({} as ICycleContextType);

/* Schema */
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Indique um nome para tarefa'),
  minutesAmount: zod.number()
    .min(1, 'O minimo para tarefa é 1 minutos')
    .max(60, 'O maximo para tarefa é 60 minutos'),
});

/* O zod cria a interface necessária pelo schema  */
type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  const [cycles, setCycles] = useState<ICycle[]>([]);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const newCycleForm = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm;
  const tasks = watch('task');
  const isSubmitDisabled = !tasks;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

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

  function markCurrentCycleAsFinished() {
    setCycles((stateCycle) =>
      stateCycle.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle;
        }
      }),
    );
  };

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  };

  return (
    <HomeContainer>
      <form
        action=""
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <CyclesContext.Provider value={{
          activeCycle,
          activeCycleId,
          setSecondsPassed,
          amountSecondsPassed,
          markCurrentCycleAsFinished
        }}>

          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <Countdown />

        </CyclesContext.Provider>


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