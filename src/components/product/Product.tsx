import { Product as ProductType } from '@/hooks/data/useProducts'
import Image from 'next/image';

export type ProductProps = {
    product: ProductType
}

export default function Product(props: ProductProps) {
    const { product } = props
    
    return <>
        {product.image && <Image src={product.image} alt={product.name} width={500} height={260} style={{ maxWidth: '100%', height: '100%'}} /> }
    </>
        
}