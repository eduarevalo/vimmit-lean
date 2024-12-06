import Form from "@/components/Form";

export default function Page() {
    return <Form 
        namespace='CHECKOUT'
        title='TITLE'
        fields={[
            { id: 'name', type: 'text', label: 'CUSTOMER', guidance: 'CUSTOMER_GUIDANCE' },
            { id: 'items', type: 'array', label: 'ITEMS', fields: [
                { id: 'product', type: 'text', label: 'PRODUCT' },
                { id: 'quantity', type: 'text', label: 'QUANTITY' },
                { id: 'price', type: 'text', label: 'PRICE' }
            ] }
        ]} 
        actions={[
            { label: 'SUBMIT', main: true }
        ]}
        />
}