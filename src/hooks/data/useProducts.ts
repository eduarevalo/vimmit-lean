import { useCallback, useEffect, useState } from "react"

export type Product = { 
    id: string
    name: string
    price: number,
    categories: string[],
    stock: {
        units: number,
        pack24: number
    }
}

export const useProducts = () => {
    const [state, setState] = useState<{ all: Product[], selected: Product[]}>({ all: [], selected: []});

    useEffect(() => {
        setState(state => ({ 
            ...state, 
            all: [{
                id: '0000010',
                name: 'Poulet Fromage',
                price: 5.99,
                categories: ['Premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            },{
                id: '0000011',
                name: 'Trois Fromages',
                price: 5.99,
                categories: ['Premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }, {
                id: '0000012',
                name: 'Jambon Fromage',
                price: 6.99,
                categories: ['Deluxe'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }, {
                id: '0000013',
                name: 'Hawaïenne',
                price: 5.99,
                categories: ['Premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }, {
                id: '000003',
                name: 'Nutella',
                price: 5.99,
                categories: ['Sweet'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }, {
                id: '000004',
                name: 'Goyave',
                price: 5.99,
                categories: ['Sweet'],
                stock: {
                    units: 10,
                    pack24: 1
                },
            }, {
                id: '000006',
                name: 'Dulce Leche',
                price: 5.99,
                categories: ['Sweet'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }, {
                id: '000005',
                name: 'aaa',
                price: 5.99,
                categories: ['Sweet'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }
        ]}))
    }, [])

    const setSelected = useCallback((employee: Product) => {
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