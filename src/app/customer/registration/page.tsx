import Form from "@/components/Form";
import { Box } from "@mui/material";

export default function Page() {
    return <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh">
        <Form 
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
    </Box>
}