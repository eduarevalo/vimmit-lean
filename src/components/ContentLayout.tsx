import { Stack, Typography } from "@mui/material";
import Grow from '@mui/material/Grow';
import { useTranslations } from 'next-intl';
import { Children, ReactElement, ReactNode } from "react";

export type ContentLayoutProps = { 
    namespace?: string,
    title?: string, 
    description?: string
    children?: ReactNode
}

export default function ContentLayout(props: ContentLayoutProps) {
    const { title, description, namespace, children } = props;
    const t = useTranslations(namespace);

    return <Stack spacing={2} style={{ width: '100%' }}>
                 
        { title && <Typography variant="h4">{t(title)}</Typography> }
        
        { description && <Typography variant="body2">{t(description)}</Typography> }
        
        {
            children && Children.map(children, (child, index) =>
                <Grow in timeout={Math.min(((index+1) * 300), 1200)}>
                    <div>
                        {child as ReactElement}
                    </div>
                </Grow>
            )
        }

    </Stack>
}