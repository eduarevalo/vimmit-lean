import { useCallback, useEffect, useState } from "react"

export type Employee ={ 
    id: string
    initials: string
    firstName: string
    lastName: string
}

export const useEmployees = () => {
    const [state, setState] = useState<{ all: Employee[], selected: Employee[]}>({ all: [], selected: []});

    useEffect(() => {
        setState(state => ({ 
            ...state, 
            all: [{
                id: '000001',
                initials: 'CV',
                firstName: 'Camilo',
                lastName: 'Velez'
            }, {
                id: '000002',
                initials: 'MN',
                firstName: 'Marduk',
                lastName: 'Nava'
            }, {
                id: '000003',
                initials: 'JH',
                firstName: 'Juan Carlos',
                lastName: 'Hernandez'
            } 
        ]}))
    }, [])

    const setSelected = useCallback((employee: Employee) => {
        setState(state => {
            const selected = state.selected.filter(e => e.id !== employee.id)
            if (selected.length === state.selected.length) {
                return { 
                    ...state, 
                    selected: [...selected, employee] 
                }
            }
            return { ...state, selected }
        })
    }, [setState])

    return {
        ...state,
        setSelected
    }
}