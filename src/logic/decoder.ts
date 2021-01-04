import charTable from './chars'

export default function decoder(input:string) {
	let out: any = input.split("")
	let parity:number
	out =out.map((elem:string)=>charTable.indexOf(elem))
	parity = out.slice(-1)[0]-2047
	out =out.slice(0,-1)
	// eslint-disable-next-line
	if((parity||0)!=(out?.reduce((a:number,b:number)=>a+b, 0)%89)){
		return "PARITY ERROR!"
	}
	out =out.map((elem:number)=>elem.toString(2))
	out =out.map((elem:string)=>elem.padStart(11, "0"))
	out =out.join("")
	out =out.match(/.{1,8}/g)
	out =out?.map((elem:string)=>parseInt(elem, 2))
	out =new Uint32Array(out)
	out =Buffer.from(out).toString()
	out =out.trim()
	return out
}