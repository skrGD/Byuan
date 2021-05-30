import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import modules from '@store/modules'
import { IStore } from './types'


export const key: InjectionKey<Store<IStore>> = Symbol()



console.log('modules',modules);


export const store = createStore<IStore>({
  modules
})

export function useStore() {
  return baseUseStore(key)
}
