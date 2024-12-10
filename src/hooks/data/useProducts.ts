import { useCallback, useEffect, useState } from "react"

export type Product = { 
    id: string
    name: string
    price: number,
    categories: ('deluxe' | 'premium' | 'sweet' | 'share' | 'frozen')[],
    stock: {
        units: number,
        pack24: number
    }
    image?: string
}

export const useProducts = () => {
    const [state, setState] = useState<{ all: Product[], selected: Product[]}>({ all: [], selected: []});

    useEffect(() => {
        setState(state => ({ 
            ...state, 
            all: [{
                id: '00000001',
                name: 'Share 4',
                price: 22.99,
                categories: ['share'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/combo-4-box.png'
            }, {
                id: '00000002',
                name: 'Share 12',
                price: 52.99,
                categories: ['share'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/combo-12-box.png'
            }, {
                id: '0000010',
                name: 'Burger Fromage',
                price: 6.99,
                categories: ['deluxe'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/burger-fromage-tray.png'
            }, {
                id: '0000011',
                name: 'Poulet Fromage',
                price: 5.99,
                categories: ['premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/poulet-fromage-tray.png'
            }, {
                id: '0000012',
                name: 'Trois Fromages',
                price: 5.99,
                categories: ['premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/trois-fromage-tray.png'
            }, {
                id: '0000013',
                name: 'Jambon Fromage',
                price: 6.99,
                categories: ['premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/jambon-fromage-tray.png'
            }, {
                id: '0000014',
                name: 'Hawaïenne',
                price: 5.99,
                categories: ['premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/hawaienne-tray.png'
            }, {
                id: '0000015',
                name: 'Poulet BBQ',
                price: 6.99,
                categories: ['deluxe'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/poulet-bbq-tray.png'
            }, {
                id: '0000016',
                name: 'Côtes Levées',
                price: 6.99,
                categories: ['deluxe'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/cote-levee-tray.png'
            }, {
                id: '0000017',
                name: 'Caprese',
                price: 5.99,
                categories: ['premium'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/caprese-tray.png'
            }, {
                id: '0000018',
                name: 'Spécial Boeuf',
                price: 5.99,
                categories: ['deluxe'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/special-boeuf-tray.png'
            }, {
                id: '0000019',
                name: 'Frozen X4',
                price: 19.99,
                categories: ['frozen'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/frozen-4.png'
            }, {
                id: '0000020',
                name: 'Frozen X8',
                price: 37.99,
                categories: ['frozen'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/frozen-8.png'
            }, {
                id: '0000021',
                name: 'Frozen X12',
                price: 54.99,
                categories: ['frozen'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/frozen-12.png'
            }, {
                id: '0000022',
                name: 'Frozen X16',
                price: 70.99,
                categories: ['frozen'],
                stock: {
                    units: 4,
                    pack24: 2
                },
                image: '/products/frozen-16.png'
            }, {
                id: '000003',
                name: 'Nutella',
                price: 5.99,
                categories: ['sweet'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }, {
                id: '000004',
                name: 'Goyave',
                price: 5.99,
                categories: ['sweet'],
                stock: {
                    units: 10,
                    pack24: 1
                },
            }, {
                id: '000006',
                name: 'Dulce Leche',
                price: 5.99,
                categories: ['sweet'],
                stock: {
                    units: 4,
                    pack24: 2
                },
            }, {
                id: '000005',
                name: 'aaa',
                price: 5.99,
                categories: ['sweet'],
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