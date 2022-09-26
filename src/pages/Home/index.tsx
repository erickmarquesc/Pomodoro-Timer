import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Play } from "phosphor-react";
import * as zod from "zod";
import {
  StartCountdownButton,
  MinutesAmountInput,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  TaskInput
} from "./styles";

/* Schema */
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Indique um nome para tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O minimo para tarefa é 5 minutos')
    .max(60, 'O maximo para tarefa é 60 minutos'),
});

/* O zod cria a interface necessária pelo schema  */
type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

  const { register, handleSubmit, watch, reset } = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const tasks = watch('task');
  const isSubmitDisabled = !tasks;

  function handleCreateNewCycle(data: INewCycleFormData) {
    reset();
  };

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
            placeholder="Nome do seu projeto"
            {...register('task')}
          />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            min={5}
            max={60}
            step={5}
            type="number"
            placeholder="00"
            id="minutesAmount"
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>

        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton
          type="submit"
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};