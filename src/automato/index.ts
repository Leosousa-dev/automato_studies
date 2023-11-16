import { States } from "../types/states";
import Transition from "./transition";

export default function Automato(currentState: States = States.q0,input: string){
   const nexState = Transition(currentState, input);
   console.log(`${currentState}, ${input} -> ${nexState}`)
   
   return nexState;
}