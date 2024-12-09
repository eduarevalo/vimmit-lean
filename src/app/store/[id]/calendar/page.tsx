import Form from "@/components/Form";
import { Box } from "@mui/material";

export default function Page() {
    return <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh">
        <Form 
          namespace='STORE_CALENDAR'
          title='TITLE'
          description='DESCRIPTION'
          fields={[
            { id: 'calendar', type: 'calendar' },
          ]} 
          actions={[]}
        />
    </Box>
}