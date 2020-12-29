import charTable from './chars'
const allignTo11 = (input:Uint32Array)=>{
    const arr = []
    for(let i =0; i<input.length; i++){
        arr.push(input[i])
    }
    while(arr.length%11!==0){
        arr.push(32) //push " " to the end of the string
    }

    return Uint32Array.from(arr)
}

const arrToBinaryString = (input:Uint32Array)=>{
    const out:string[] = [];
    for(let i =0; i<input.length; i++){
        out.push(input[i].toString(2).padStart(8, "0"))
    }
    return out
}
const groupBy11bits=(input:string)=>input.match(/.{1,11}/g)

// string 'ab' 
// num[] [97,98] 
// added spaces to make lenght%11==0 [97,98,32,32,32,32,32,32,32,32,32] 
// every number converted to binary, every element.length==8 ["01100001", "01100010", "00100000" ...... "00100000"]  
// joined to one string"01100001011000100010000000100000......"  
// grouped by 11 bits ["01100001011","00010001000","00001000000","01000000010","00000010000","00010000000","10000000100","00000100000"]
// parsed to real numbers [779,136,64,514,16,128,1028,32]
// picked from the list by index ["🧔🏽‍♀️","‰","@","🏊","j","õ","👨🏼‍⚕️","U"]
export default function encoder(input:string) {
    let out:any = new Uint32Array(Buffer.from(input, "utf8"));
    out =allignTo11(out);
    out =arrToBinaryString(out);
    out =out.join("")
    out =groupBy11bits(out);
    out =out?.map((elem:string)=>parseInt(elem, 2))
    out =out?.map((elem:number)=>charTable[elem])
    return out
}