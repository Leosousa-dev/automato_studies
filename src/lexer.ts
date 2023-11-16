import Automato from "./automato";
import { States } from "./types/states";

const input: string = "123.00 "

let index = 0;   
let currentState = States.q0;


for(index; input.length > index; index++){
   let currentChar = input[index]

   currentState = Automato(currentState, currentChar)
}
