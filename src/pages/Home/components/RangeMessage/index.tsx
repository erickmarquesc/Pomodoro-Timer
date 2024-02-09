import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'

import { CyclesContext } from '../../../../context/CyclesContext'
import { Status } from '../../../History/styles'
import { ContentRangeMessage } from './styles'

interface IRangeMessageProps {
  minutesAmountMessageErro: string | undefined
}

export const RangeMessage = ({ minutesAmountMessageErro }: IRangeMessageProps) => {
  const { cycles } = useContext(CyclesContext)

  return (
    <ContentRangeMessage>
      {
        minutesAmountMessageErro
          ?
          <div>
            <strong>
              {minutesAmountMessageErro}
            </strong>
          </div>
          :
          cycles.map((cycle, index) => (
            index === cycles.length - 1 && (
              <div key={cycle.id}>
                <strong>
                  Sua ultima tarefa foi: {cycle.task}
                </strong>
                <strong>
                  {formatDistanceToNow(new Date(cycle.startDate),
                    {
                      addSuffix: true,
                      locale: ptBR
                    }
                  )}
                </strong>
                <strong>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status statusColor="red">Interrompido</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </strong>
              </div>
            )
          ))
      }
    </ContentRangeMessage>
  )
}
