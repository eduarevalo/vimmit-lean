import { Product as ProductType } from '@/hooks/data/useProducts'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export type ProductProps = {
    product: ProductType
}

export default function Product(props: ProductProps) {
    const { product } = props
    
    return (
      <Box>
        {product.image && <Image src={product.image} alt={product.name} width={500} height={260} style={{ maxWidth: '100%', height: '100%'}} /> }
        <Typography variant='h6' align='center' color='textSecondary'>{product.name}</Typography>
        <Typography variant='subtitle2'>{product.description}</Typography>
      </Box>
    )
        
}