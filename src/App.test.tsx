import encoder from './logic/encoder';
import decoder from './logic/decoder';

const getCombinations = (len:number, sampleSize:number)=>{
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let output = [];

  for(let i = 0; i<sampleSize;i++){
    let result = ""
    for ( let j = 0; j < len; j++ ) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    output.push(result)
  }
  return output
}
const getAllCombinations = (maxLen:number, samplePerLen:number)=>{
  let out:string[] = []
  for(let i = 1; i<=maxLen;i++){
    out=[...out, ...getCombinations(i, samplePerLen)]
  }
  return out
}
describe("decoder and encoder sync(1-8 ascii chars)", ()=>{
  test.each(getAllCombinations(50,1000))(
    "input should === to decoder(encoder(input))",
    (input)=>{
      expect(decoder(encoder(input))).toEqual(input)
    }
  )
})

