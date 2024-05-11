import { Product } from '@prisma/client'

import { computeProductTotalPrice } from '@/helpers/product'

import ProductItem from '@/components/ui/product-item'

interface ProductListProps {
  products: Product[]
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  )
}

export default ProductsList
