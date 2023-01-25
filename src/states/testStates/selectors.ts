import { selector, selectorFamily, atom } from 'recoil'
import { fetch, AxiosConfigType } from "@/api"
import { ResultData } from './types'

export const configAtom = atom<AxiosConfigType>({
    key: 'configAtom',
    default: { method: 'get', url: '/todos' }
})

// export const FetchSelector = selectorFamily<ResultData[], AxiosConfigType>({
//     key: 'testGetDataSelector',
//     get: (config) => async () => {
//         return await fetch(config)
//     }
// })