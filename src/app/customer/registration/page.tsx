import Form from "@/components/Form";

export default function Page() {
    return <Form 
        namespace='CUSTOMER_REGISTRATION'
        title='TITLE'
        fields={[
            { id: 'name', type: 'text', label: 'CUSTOMER_NAME' },
            { id: 'phoneNumber', type: 'text', label: 'PHONE_NUMBER' },
            { id: 'email', type: 'text', label: 'EMAIL' },
        ]} 
        actions={[
            { label: 'SEND_CONFIRMATION_SMS' }, 
            { label: 'SUBMIT', main: true }
        ]}
        />
}