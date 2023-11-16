import { States } from "../types/states";
import Transition from "./transition";

export default function Automato(currentState: States,input: string): States{
   let nexState = Transition(currentState, input);
   console.log(`currentState e : ${currentState}. o char e ${input}`)
   console.log(nexState)

   return nexState;
}
