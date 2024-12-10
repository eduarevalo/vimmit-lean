import { useProducts } from '@/hooks/data/useProducts'
import Grid from '@mui/material/Grid2';
import Product from "../../components/product/Product";
import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

export default function MenuTab() {
    const { all } = useProducts();
    const deluxe = useMemo(() => all.filter(p => p.categories.includes('deluxe')), [all])
    const premium = useMemo(() => all.filter(p => p.categories.includes('premium')), [all])
    const sweet = useMemo(() => all.filter(p => p.categories.includes('sweet')), [all])
    const share = useMemo(() => all.filter(p => p.categories.includes('share')), [all])
    const frozen = useMemo(() => all.filter(p => p.categories.includes('frozen')), [all])
    return (
      <Stack spacing={3}>
        <Typography variant="h4" color='textSecondary'>Deluxe</Typography>
        <Grid container spacing={3}>    
            { deluxe.map(product => <Grid size={6} key={product.id}><Product product={product} /></Grid>) }
        </Grid>
        <Typography variant="h4" color='textSecondary' pt={3}>Premium</Typography>
        <Grid container spacing={3}>
            { premium.map(product => <Grid size={6} key={product.id}><Product product={product} /></Grid>) }
        </Grid>
        <Typography variant="h4" color='textSecondary' pt={3}>Sweet</Typography>
        <Grid container spacing={3}>    
            { sweet.map(product => <Grid size={6} key={product.id}><Product product={product} /></Grid>) }
        </Grid>
        <Typography variant="h4" color='textSecondary' pt={3}>Share</Typography>
        <Grid container spacing={3}>    
            { share.map(product => <Grid size={6} key={product.id}><Product product={product} /></Grid>) }
        </Grid>
        <Typography variant="h4" color='textSecondary' pt={3}>Frozen</Typography>
        <Grid container spacing={3}>    
            { frozen.map(product => <Grid size={6} key={product.id}><Product product={product} /></Grid>) }
        </Grid>
      </Stack>
    )
        
}