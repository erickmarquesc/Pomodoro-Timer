import { ICycle } from "../../context/interfaces"

interface ICyclesState {
  cycles: ICycle[];
  activeCycleId: string | null;
};