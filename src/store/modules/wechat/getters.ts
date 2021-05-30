import { Iwechat } from './state'
export const getters= {
  chatname: (state: Iwechat) =>{return state.chatname} ,
  chatage: (state: Iwechat) => {return state.chatage},
}