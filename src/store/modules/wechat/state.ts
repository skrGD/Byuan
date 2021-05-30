// export const userState = ()=>{
//   const store = {
//     loading:true
//   }
//   return store 
// }


// export type userState = ReturnType<typeof userState>

export type Iwechat = {
  chatname: string,
  chatage: number
}


export const state: Iwechat = {
  chatname: '',
  chatage: 0
}