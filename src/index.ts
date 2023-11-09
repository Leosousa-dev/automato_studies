import read from "./utils/read";



enum states{
    q0,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6
}
type symbol = {
    D: string,
    L: string,
    ".": string,
    EOF: string
}


(
function lexer(){
    const code = read("test.txt")
    let index: number = 0;

    while(code.length > index){
        const currentChar = code[index];
        const nextChar = code[index] + 1;

        if(currentChar === " " || currentChar === "\n"){
            console.log(currentChar)
        }
        index++
    }
}
)()