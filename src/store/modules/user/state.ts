// export const userState = ()=>{
//   const store = {
//     loading:true
//   }
//   return store 
// }


// export type userState = ReturnType<typeof userState>

export type Iuser = {
  name: string,
  age: number
}


export const state: Iuser = {
  name: '',
  age: 0
}