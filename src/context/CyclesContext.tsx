import { createContext, ReactNode, useState } from "react";

interface ICycle {
  id: string;
  task: string;
  startDate: Date;
  finishedDate?: Date;
  minutesAmount: number;
  interruptedDate?: Date;
};

interface ICreateCycleData {
  task: string;
  minutesAmount: number;
}

interface ICycleContextType {
  cycles: ICycle[];
  amountSecondsPassed: number;
  activeCycleId: string | null;
  activeCycle: ICycle | undefined;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: ICreateCycleData) => void;
  interruptCurrentCycle: () => void;
};

interface ICycleContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as ICycleContextType);

export function CyclesContextProvider({ children }: ICycleContextProviderProps) {
  
  const [cycles, setCycles] = useState<ICycle[]>([]);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
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

  function createNewCycle(data: ICreateCycleData) {
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

  };

  function interruptCurrentCycle() {
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

  return (
    <CyclesContext.Provider value={{
      cycles,
      activeCycle,
      activeCycleId,
      setSecondsPassed,
      amountSecondsPassed,
      createNewCycle,
      interruptCurrentCycle,
      markCurrentCycleAsFinished,
    }}>
      {children}
    </CyclesContext.Provider>
  )
}