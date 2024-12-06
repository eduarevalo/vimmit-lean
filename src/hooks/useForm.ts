import { useCallback, useState } from "react"

export type UseFormProps<T> = {
    data: T
}

export type FormHook<T> = {
    data: T,
    setValue(property: string, value: unknown): void
}

export const useForm = <T = object>(props: UseFormProps<T>): FormHook<T> => {
    const [data, setData] = useState<T>(props.data)

    const setValue = useCallback((property: string, value: unknown) => {
        setData(data => ({ ...data, [property]: value }))
    }, [setData]);

    return {
        data,
        setValue
    }
}