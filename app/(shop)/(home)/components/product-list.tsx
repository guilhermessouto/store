import { Product } from '@prisma/client'

import { computeProductTotalPrice } from '@/helpers/product'

import ProductItem from '@/components/ui/product-item'

interface ProductListProps {
  products: Product[]
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5">
      {products.slice(0, 6).map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  )
}

export default ProductsList
