import { StartCountdownButton, StopCountdownButton, HomeContainer, } from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Countdown } from "./components/Countdow";
import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import * as zod from "zod";
import { CyclesContext } from "../../context/CyclesContext";

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
  const { createNewCycle,interruptCurrentCycle,activeCycle} = useContext(CyclesContext);

  const newCycleForm = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, watch,  reset } = newCycleForm;

  function handleCreateNewCycle(data:INewCycleFormData){
    createNewCycle(data)
    reset();
  };

  const tasks = watch('task');
  const isSubmitDisabled = !tasks;

  return (
    <HomeContainer>
      <form
        action=""
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton
            type="button"
            onClick={interruptCurrentCycle}
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