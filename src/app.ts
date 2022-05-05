// class Department {
//     name:string

//     constructor(private n:string){
//       this.name=n
//     }
// }

// class newDepartment extends Department{
//       faculty:string[]
//       constructor(id:string, faculty:string[]){
//         super(id)
//         this.faculty=faculty
//       }

//       getFaculties():string[]{
//         return this.faculty
//       }
// }
// const getFac=new newDepartment("ayomiku",["john", "peter"])
// console.log(getFac.getFaculties())
// console.log(getFac.name)
// interface person{
//   name:string,
//   age:number;
//   greet(phrase:string):void;
// }
// let user1:person
// user1={
//   name:"ayomiku",
//   age:20,
//   greet(phrase:string){
//     console.log(phrase)
//      return this.age+phrase
//   }
// }
// user1.greet("hey")
// intersection types
// type admin={
//   name:string,
//   previ:string []
// }
// type employee={
//   name:string,
//   startdate:Date
// }
// type elevateEmployee= admin & employee
// const el1 : elevateEmployee ={
//   name:"ayomiku",
//   previ:["ayom", "miku", "olatunji"],
//   startdate: new Date()
// } 
// // console.log(el1)
// type combinable=string | number
// type numeric=number | boolean
// type universal=combinable & numeric

// // type guard

// const add:(a:combinable, b:combinable)=>void=(a,b)=>{
//     if(typeof a === "string" || typeof b ==="string"){
//       return a.toString() + b.toString()
//     } 
// }

// const checkGuard:(empl:admin | employee)=>void=(empl)=>{
//     if("previ" in empl)  {
//       console.log("your name"+empl.name, empl.previ)
//     }
// }
// checkGuard(el1)
interface Bird {
  type:'bird',
  flying:string
}
interface Dog {
  type:"dog"
  running:string
}
type combine=Bird | Dog


const check:(animal:combine)=>void=(animal)=>{
     let ani;
     switch(animal.type){
        case 'bird' :
           ani=animal.flying
           break
        case 'dog':
          ani=animal.running
          break
     }
     return console.log(ani)
}

check({type:"bird", flying:"yes it is"})