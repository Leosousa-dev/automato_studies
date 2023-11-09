import * as fs from "node:fs"
import { exit } from "node:process"


export default function read(path: string){
   try{
        const file = fs.readFileSync(path, 'utf-8')
        console.log(file)
        return file;
   }
   catch(err){
        console.log(err)
        exit()
   }
}
