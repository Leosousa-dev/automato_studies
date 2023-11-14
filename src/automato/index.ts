/*
Num_int = D+
Num_float = D+ \. D+


Note: ↶ means that it will remain in the same state while encountering the same type of character
D = digit ex 0...9
L = any symbol or letter

q0: start
q1: D+
q2: .
q3 D+
q4: error
q5: recognize int
q6: recognize float

          (q4)
   L ↗           ↖ L
  |      ↶             ↶
(q0) → (q1) → (q2) → (q3)
         |             |                          |      
       (q5)          (q6)
*/

import { isDigit } from "../utils";

enum States{
   q0 = "q0",
   q1 = "q1",
   q2 = "q2",
   q3 = "q3",
   q4 = "q4",
   q5 = "q5",
   q6 = "q6"
}

// creating fn automato afd
function afd(char: string, currentState: string){
   
   switch(currentState){
      case States.q0:
         if (isDigit(char)) return States.q1
         else{
            console.error("unrecognized token: ", char)
            return States.q4;
         }
      case States.q1:
         if (isDigit(char)) return States.q1
         else if(char === '.') return States.q2
         else return States.q5;
      case States.q2:
         if (isDigit(char)) return States.q3;
         else return States.q5;
      case States.q3:
         if (isDigit(char)) return 'q3';
         else return 'q6';
      default:
         console.error("unrecognized token: ", char)
         return States.q4;
   }
}


console.log(afd("34.4", States.q0))
