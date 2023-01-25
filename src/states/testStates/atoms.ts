import { selector, selectorFamily, atom } from 'recoil'
import { Dispatcher } from './dispatcher'
import { ResultData } from '@/states/testStates/types'
import { fetch, AxiosConfigType } from "@/api"


export const logEntryListState = atom<string[]>({
    key: 'logEntryListState',
    default: []
})

export const todoTestListState = atom<ResultData[]>({
    key: 'todoTestListState',
    default: []
})

export const toDoRecycleBinState = atom<ResultData[]>({
    key: 'toDoRecycleBinState',
    default: []   
})

export const dispatcherState = atom<Dispatcher | undefined>({
    key: "dispatcherState",
    default: undefined,
});

export const fetchAPI = atom<ResultData[]>({
    key: 'fetch',
    default: selector({
        key: 'fetch/get',
        get: async () => {
            return await fetch({ method: 'get', url: '/todos' })
        }
    })
})