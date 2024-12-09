import Form from "@/components/Form";

export default function DeliveryTab() {
    return <Form 
        namespace='FRONT_STORE'
        description="DELIVERY_DESCRIPTION"
        fields={[
            { id: 'address', type: 'text', label: 'ADDRESS' },
        ]} 
        actions={[
            { label: 'SUBMIT', main: true }
        ]}
    />
}