import Form from "@/components/Form";

export default function Page() {
    return <Form 
        namespace='STORE_CALENDAR'
        title='TITLE'
        description='DESCRIPTION'
        fields={[
            { id: 'calendar', type: 'calendar' },
        ]} 
        actions={[]}
        />
}