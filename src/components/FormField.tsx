import { TextField } from "@mui/material";
import { useTranslations } from 'next-intl';
import FormArray from "./FormArray";
import { FormField as FormFieldType } from "./Form";
import FormCalendar from "./FormCalendar";

export type FormFieldProps = { 
    field: FormFieldType
    namespace?: string
}

export default function FormField(props: FormFieldProps) {
    const { field, namespace } = props;
    const t = useTranslations(namespace);
    return (
        <span>
        { 
            field.type === 'text' && 
            <TextField 
                variant="outlined"
                fullWidth
                helperText={field.guidance ? t(field.guidance): null}
                label={t(field.label)} /> 
        }
        {
            field.type === 'array' && 
            <FormArray parentId={field.id} label={field.label} namespace={namespace} fields={field.fields} values={[{ id: 'a' }, { id: 'b' }, { id: 'c' }]}/>
        }
        {
            field.type === 'calendar' &&
            <FormCalendar />
        }
        </span>
    )
}