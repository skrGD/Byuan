import { ActionContext } from "vuex";
import { GET_DATA } from "./constant";
import { Iwechat } from "./state";


export const actions = {
  [GET_DATA]({ commit }: ActionContext<Iwechat, unknown>, payload: boolean): void {
    commit(GET_DATA, payload)
  }
}