import * as zod from "zod"

/* Schema */
export const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Indique um nome para tarefa'),
  minutesAmount: zod.number()
    .min(1, 'O minimo para tarefa é 1 minutos')
    .max(60, 'O maximo para tarefa é de 60 minutos'),
})

/* O zod cria a interface necessária pelo schema  */
export type INewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>