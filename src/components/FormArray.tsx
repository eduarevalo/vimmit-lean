import { FormField as FormFieldType } from "./Form";
import FormField from "./FormField";
import { Divider, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export type FormArrayProps = { 
    namespace?: string
    parentId: string
    fields: FormFieldType[]
    values: { id: string }[]
    label?: string
}

export default function FormArray(props: FormArrayProps) {
    const { namespace, values, label, fields } = props;
    const t = useTranslations(namespace)
    return (
      <span>
        
        { !!label && <Typography variant="h5">{t(label)}</Typography> }
        
        <Stack direction='column' divider={<Divider orientation="horizontal" flexItem />} spacing={1}>
          {
            values
            .map(value => (
              
                <Stack direction='row' spacing={1} key={value.id}>
                    { fields.map((field) => (
                        <FormField key={field.id} field={field} namespace={namespace} />
                    ))}
                </Stack>
              
            ))}
        </Stack>
        
      </span>
    )
}