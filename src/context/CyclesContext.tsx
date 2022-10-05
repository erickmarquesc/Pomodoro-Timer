import { differenceInSeconds } from "date-fns";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { addNewCyleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { cyclesReducer, ICycle } from "../reducers/cycles/reducer";



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

  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  }, () => {
    const atoredStateAsJSON = localStorage.getItem('@pomodoroTimer:cycles-state-1.0.1');
    if (atoredStateAsJSON) {
      return JSON.parse(atoredStateAsJSON);
    }
  });


  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem('@pomodoroTimer:cycles-state-1.0.1', stateJSON);
  }, [cyclesState]);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(()=>{
    if(activeCycle){
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    };

    return 0;
  });



  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  };

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  };

  function createNewCycle(data: ICreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    };

    dispatch(addNewCyleAction(newCycle));

    setAmountSecondsPassed(0);

  };

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
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