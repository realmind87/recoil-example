import { useCallback } from 'react'
import { useRecoilCallback } from 'recoil'
import { removeItemAtIndex } from './utils'
import { todoTestListState, toDoRecycleBinState, logEntryListState } from './atoms'
import { ResultData } from './types'

export const createDispatcher = () => {
    const logMessage = useRecoilCallback(({ set }) => (message: string) => {
        console.log(`${message}`);
        set(logEntryListState, (logEntries: string[]) => [...logEntries, message]);
    })

    const addItem = useRecoilCallback(({ set }) => (content: string) => {
        const newTodoItem = {
            content,
            isCompleted: false
        }
        console.log(content)
        set(todoTestListState, (oldTodoList: any) => [...oldTodoList, newTodoItem])
        logMessage(`Todo: ${content} added`)
    })

    const deleteItem = useRecoilCallback(({ snapshot, set }) => async (index: number) => {
            let todoList = await snapshot.getPromise(todoTestListState);

            if (index < 0 || index >= todoList.length) {
                throw new Error("Could not delete item. Index out of bounds.");
            }
    
            const foundItem = todoList[index];
    
            if (foundItem) {
                set(todoTestListState, (oldTodoList: ResultData[]) => {
                    return removeItemAtIndex(oldTodoList, index);
                });
                
                set(toDoRecycleBinState, (oldRecycleList: ResultData[]) => {
                    return [...oldRecycleList, foundItem];
                });
                logMessage(`Todo: \"${foundItem?.content}\" moved to recycle bin.`);
            }
        }
    );

    const restoreItem = useRecoilCallback(({ snapshot, set }) => async (index: number) => {
        console.log(index)
        let recycleList = await snapshot.getPromise(toDoRecycleBinState);

        if (index < 0 || index >= recycleList.length) {
            throw new Error("Could not restore item. Index out of bounds.")
        }

        const foundItem = recycleList[index];

        if (foundItem) {
            set(toDoRecycleBinState, (oldRecycleList: ResultData[]) => {
                return removeItemAtIndex(oldRecycleList, index);
            })

            set(todoTestListState, (oldTodoList: ResultData[]) => [
                ...oldTodoList,
                foundItem
            ])

            logMessage(`Todo: \"${foundItem.content}\" restored from recycle bin.`);
        }
    })

    const emptyRecycleBin = useRecoilCallback(({ reset }) => () => {
        reset(toDoRecycleBinState)
        logMessage(`Recycle bin emptied.`)
    })

    return {
        logMessage,
        addItem,
        deleteItem,
        restoreItem,
        emptyRecycleBin,
    }
}


export type Dispatcher = ReturnType<typeof createDispatcher>