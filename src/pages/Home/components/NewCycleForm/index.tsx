import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {  
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput
        id="task"
        disabled={!!activeCycle}
        placeholder="Nome da tarefa"
        list="task-suggestions"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Estudar curso" />
        <option value="Estudar faculdade" />
        <option value="Ler" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountInput
        type="number"
        placeholder="00"
        id="minutesAmount"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>

    </FormContainer>
  )
}
