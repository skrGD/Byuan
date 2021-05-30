import { GET_DATA } from "./constant"
import { Iwechat } from "./state"




export const mutations = {
  [GET_DATA](state: Iwechat, payload: string) {
    state.chatname = payload
  }
}