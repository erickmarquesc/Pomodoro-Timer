import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../..";
import { useContext } from "react";

export function NewCycleForm() {
  
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  
  return (
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
  );
};