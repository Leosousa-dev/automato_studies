import { States } from "./automato";
import read  from "./utils/read";
import afd  from "./automato";

function lexer(path: string){
   const code = read(path);
   let index: number = 0;
   let start = States.q0;

   for(index; code.length > index; index++){
      let Char = code[index];

      start = afd(Char, start);
      console.log(start)

   }

}

lexer("test.txt")