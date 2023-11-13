import * as fs from "node:fs"


export default function read(path: string){
     const source = fs.readFileSync(path, 'utf-8')
     console.log(source)
     return source
}

read("test.txt")