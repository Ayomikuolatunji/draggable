console.log("hey typescript i am new here")



const typesScript=(num1:number, num2:number,boo:boolean, str:string)=>{
     const result=num1+num2
   if(boo){
     return str+result
   }
}

const num1: number=12
const num2 :number=3
const boo:boolean=true
const str:string="hey check your result"

typesScript(num1, num2,boo,str)