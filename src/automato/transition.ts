
/*
Input Alphabet (Σ)
 */
import { States } from "../types/states";
import { isDigit } from "../utils";

const isAphabet = /^[\d. ]$/;

export default function Transition(currentState: States,char: string){
   
   switch(currentState){
      case States.q0:
         if(!isAphabet.test(char)) return States.q4;
         if(isDigit(char)) return States.q1;
         if(char === " ") return States.q0;
         if(char === ".") return States.q4;
      break;
      case States.q1:
         if(isDigit(char)) return States.q1;
         if(char === " ") return States.q5;         
         if(char === ".") return States.q2;
      break;
      case States.q2:
         if(isDigit(char)) return States.q4;
      break;
      case States.q3:
         if(isDigit(char)) return States.q3;
         if(char === " ") return States.q6;
      break;

      default:
         States.q4
   }

}