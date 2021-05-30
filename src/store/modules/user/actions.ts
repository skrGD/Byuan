import { ActionContext } from "vuex";
import { GET_DATA } from "./constant";
import { Iuser } from "./state";
import { IStore } from '../../../store/types'


export default {
  [GET_DATA]({ commit }: ActionContext<Iuser, IStore>, payload: string): void {
    console.log('action执行成功');
      
    commit(GET_DATA, payload)
  }
}


// export default {
//   setName({ commit }: ActionContext<Iuser, IStore>, payload: boolean): void {
//     commit('setName', payload)
//   }
// }