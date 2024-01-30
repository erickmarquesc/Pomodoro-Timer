import { useContext } from "react";
import { CyclesContext } from "../../context/CyclesContext";
import { HistoryContainer, HistoryHeader, HistoryList, Status } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { Trash, Scroll } from "phosphor-react";

import ptBR from "date-fns/locale/pt-BR";
export function History() {
  const { cycles } = useContext(CyclesContext);

  const handleClierHistory = () => {
    localStorage.clear()
    window.location.reload();
  }

  return (
    <HistoryContainer>
      <HistoryHeader>

        <h1>Meu histórico</h1>
        <button onClick={() => handleClierHistory()}>
          <Trash size={24} />
          Limpar histórico
        </button>
      </HistoryHeader>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutos</td>
                    <td>{formatDistanceToNow(new Date(cycle.startDate),
                      {
                        addSuffix: true,
                        locale: ptBR
                      }
                    )}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">Concluído</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>)
              })
            }
          </tbody>
        </table>
        {cycles.length == 0 && (

          <div className="clearHistory">
            <Scroll size={64} />

            <h1>
              O Histórico está vazio! 
            </h1>
            <strong>
              Crie um novo ciclo de tarefa.
            </strong>
          </div>)
        }
      </HistoryList>
    </HistoryContainer>
  )
};