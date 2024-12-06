import { useCallback, useState } from "react"

export type BaseStore<T> = {
    all: T[]
    selected: T[]
    multipleSelection: boolean
}

export const EMPTY_STORE = <T>(initial: Partial<BaseStore<T>>): () => BaseStore<T> => () => ({
    all: [] as T[],
    selected: [] as T[],
    multipleSelection: false,
    ...initial
})

export const useStateStore = <T extends { id: string }>(initial: Partial<BaseStore<T>>) => {
    const [state, setState] = useState<BaseStore<T>>(EMPTY_STORE(initial));

    const setSelected = useCallback((element: T) => {
        setState(state => {
            const selected = state.selected.filter(e => e.id !== element.id)
            if (selected.length === state.selected.length) {
                return { 
                    ...state, 
                    selected: [...selected, element] 
                }
            }
            return { ...state, selected }
        })
    }, [setState])

    const setAll = useCallback((data: T[]) => {
        setState(state => ({ ...state, all: data }))
    }, [setState])

    return { ...state, setState, setSelected, setAll }
}