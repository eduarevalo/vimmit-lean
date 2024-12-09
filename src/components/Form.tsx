import { Button, Stack } from "@mui/material";
import { useTranslations } from 'next-intl';
import FormArray from "./FormArray";
import FormField from "./FormField";
import ContentLayout, { ContentLayoutProps } from "./ContentLayout";

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

export type FormProps = ContentLayoutProps & { 
    fields: FormField[], 
    actions: FormAction[]
}

export default function Form(props: FormProps) {
    
    const { fields, actions, namespace, ...contentLayoutProps } = props;
    const t = useTranslations(namespace)

    return <ContentLayout {...contentLayoutProps} namespace={namespace}>
        {
            fields.map((field) => <FormField field={field} key={field.id} namespace={namespace} />)
        }
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
        </Stack>
    </ContentLayout>

}