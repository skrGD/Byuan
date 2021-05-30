import { Iuser } from "./modules/user/state"
import { Iwechat } from "./modules/wechat/state"

export interface IStore {
  user: Iuser,
  wechat: Iwechat
}