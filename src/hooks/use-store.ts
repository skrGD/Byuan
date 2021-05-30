import { useStore } from "vuex"
import { State } from "../store"
import { Getters } from "../store/utils"


// const { state, getters } = useStore<State>()
interface IUserYdStore {
    state: State
    getters: Getters,
}
const useYdStore = (): IUserYdStore => {
    const { state, getters }: IUserYdStore = useStore<State>()
    return { state, getters }
}
export { useYdStore }
export default useYdStore