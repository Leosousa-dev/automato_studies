import read from "./utils/read"


function afd(path: string){
    const code = read(path);
    let index: number = 0;

    for(index; code.length > index; index++){
        let char: string = code[index];

        console.log(char+ "test")
    }

}
afd("test.txt")