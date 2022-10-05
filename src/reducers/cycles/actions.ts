import { ICycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_fINISHED = 'MARK_CURRENT_CYCLE_AS_fINISHED',
};

export function addNewCyleAction(newCycle: ICycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    }
  };
};

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_fINISHED,
  };
};

export function interruptCurrentCycleAction(){
  return{
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
};