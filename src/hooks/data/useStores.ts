import { useStateStore } from "./core/BaseStateStore"

export type ServiceId = 'pickup' | 'delivery'

export type Address = {
    city: string
    postalCode: string
}

export type OpeningHour = {
    open: number,
    close: number
}

export type OpeningHours = {
    sunday?: OpeningHour[],
    monday?: OpeningHour[],
    tuesday?: OpeningHour[],
    wednesday?: OpeningHour[],
    thursday?: OpeningHour[],
    friday?: OpeningHour[],
    saturday?: OpeningHour[],
}

export type Store = { 
    id: string
    name: string
    address: Address
    services: ServiceId[]
    openingHours: OpeningHours
}

const stores: Store[] = [{
    id: 'victoria',
    name: 'Avenue Victoria',
    address: {
        city: 'Montreal',
        postalCode: ''
    },
    services: ['pickup', 'delivery'],
    openingHours: {}
}, {
    id: 'siembra',
    name: 'Siembra Cafe Bar',
    address: {
        city: 'Laval',
        postalCode: ''
    },
    services: ['pickup'],
    openingHours: {}
}, {
    id: 'cremazie',
    name: 'Cremazie Delivery',
    address: {
        city: 'Montreal',
        postalCode: ''
    },
    services: ['pickup', 'delivery'],
    openingHours: {}
}, {
    id: 'st-eustache',
    name: 'Saint Eustache',
    address: {
        city: 'Saint Eustache',
        postalCode: ''
    },
    services: ['delivery'],
    openingHours: {}
}, {
    id: 'laval',
    name: 'Laval',
    address: {
        city: 'Laval',
        postalCode: ''
    },
    services: ['delivery'],
    openingHours: {}
}]

export const useStores = () => {
    return useStateStore({ all: stores });
}