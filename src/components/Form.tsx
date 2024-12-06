import { Box, Button, Stack, Typography } from "@mui/material";
import Grow from '@mui/material/Grow';
import { useTranslations } from 'next-intl';
import FormArray from "./FormArray";
import FormField from "./FormField";
import { ReactNode } from "react";

export type FormFieldType = 'text' | 'heading' | 'array' | 'calendar'
export type FormFieldBase = { 
    id: string
    type: FormFieldType
}

export type FormCalendar = FormFieldBase & {
    type: 'calendar'
}

export type FormHeading = FormFieldBase & {
    type: 'heading'
    heading: string
}

export type FormText = FormFieldBase & {
    type: 'text'
    label: string
    guidance?: string
}

export type FormArray = FormFieldBase & {
    type: 'array'
    fields: FormField[]
    label?: string
}

export type FormField = FormText | FormCalendar | FormHeading | FormArray

export type FormAction = {
    label: string,
    main?: boolean 
}

export type FormProps = { 
    namespace: string,
    title: string, 
    description?: string
    fields: FormField[], 
    actions: FormAction[] 
    children?: ReactNode
}

export default function Form(props: FormProps) {
    const { title, description, fields, actions, namespace, children } = props;
    const t = useTranslations(namespace);
    return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <Stack spacing={2} style={{ width: '100%' }}>
                 
            <Typography variant="h4">{t(title)}</Typography>
            
            { description && <Typography variant="body2">{t(description)}</Typography> }
            
            {
                fields.map((field, index) => (
                    <Grow in timeout={((index+1) * 300)} key={field.id}>
                        <FormField field={field} namespace={namespace} />
                    </Grow>
                ))
            }

            <Grow in timeout={1200}>
                <Stack direction='row' spacing={2} justifyContent='end'>
                { 
                    actions
                    .map(action => <Button 
                        key={action.label} 
                        variant="contained" 
                        style={{ minWidth: '140px' }} 
                        color={action.main ? 'secondary' : 'primary' }
                        >{t(action.label)}</Button>
                        )
                }
                {children}
                </Stack>
            </Grow>
        </Stack>
    </Box>

}