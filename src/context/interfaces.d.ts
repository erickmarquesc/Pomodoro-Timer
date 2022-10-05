import { ReactNode } from "react";

export interface ICycle {
  id: string;
  task: string;
  startDate: Date;
  finishedDate?: Date;
  minutesAmount: number;
  interruptedDate?: Date;
};

export interface ICreateCycleData {
  task: string;
  minutesAmount: number;
}

export interface ICycleContextType {
  cycles: ICycle[];
  amountSecondsPassed: number;
  activeCycleId: string | null;
  activeCycle: ICycle | undefined;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: ICreateCycleData) => void;
  interruptCurrentCycle: () => void;
};

export interface ICycleContextProviderProps {
  children: ReactNode;
}