'use client'
import Form from "@/components/Form";
import { COLORS } from "@/components/employee/EmployeeList";
import { useProducts } from "@/hooks/data/useProducts";
import { Button, ButtonGroup, Stack } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const namespace = 'STORE_STOCK'
const getInitials = (name: string) => name.match(/(^\S\S?|\s\S)?/g)?.map(v=>v.trim()).join("").match(/(^\S|\S$)?/g)?.join("").toLocaleUpperCase()

export default function Page() {
    const { all } = useProducts()
    const t = useTranslations(namespace);
    const dataset = useMemo(() => all.map((product) => ({ 
        name: product.name, 
        initials: getInitials(product.name),
        units: product.stock.units, 
        pack24: product.stock.pack24,
        total: product.stock.pack24 * 24 + product.stock.units,
    })), [all])
    return <Form 
        namespace={namespace}
        title='TITLE'
        description='DESCRIPTION'
        fields={[]} 
        actions={[]}
        >
          <Stack direction='row'>
            <BarChart
                dataset={dataset}
                colors={COLORS}
                xAxis={[{ scaleType: 'band', dataKey: 'initials' }]}
                series={[{ dataKey: 'units', label: t('UNITS') }, { dataKey: 'pack24', label: t('PACK_24') }]}
                yAxis={[{ label: t('STOCK') }]}
                width={600}
                height={400}
            />
            <ButtonGroup orientation="vertical" style={{ width: '200px' }}>
                <Button key="one">{t('PLACE_ORDER')}</Button>
                <Button key="one">{t('RECEIVE_MOVE_STOCK')}</Button>
            </ButtonGroup>
          </Stack>
        </Form>
}