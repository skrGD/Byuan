import { GET_DATA } from "./constant"
import { Iuser } from "./state"


const mutations = {
  [GET_DATA](state:Iuser,payload:string):void{
    console.log('mutations执行成功');
    
    state.name = payload
  }
}
export default mutations;
