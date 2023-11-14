import read from "./utils/read"

enum States{
    q0, // start
    q1, // D+
    q2, // .
    q3, // D+ (fractional part)
    q4, // error
    q5, // recognize int
    q6, // recognize float
}

const Alphabet = /^[0-9.]+$/;

function afd(path: string){
    const code = read(path);
    let index: number = 0;

    for(index; code.length > index; index++){
        let char: string = code[index];


        console.log(char)
    }

}
afd("test.txt")