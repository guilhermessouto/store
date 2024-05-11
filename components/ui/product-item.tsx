import Image from 'next/image'
import { ArrowDownIcon } from 'lucide-react'

import { ProductWithTotalPrice } from '@/helpers/product'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex max-w-[200px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[200px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[75%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <div className="absolute left-3 top-3 px-2 py-[2px] bg-primary flex item-center rounded-lg">
            <ArrowDownIcon size={14} />
            <span>{product.discountPercentage}%</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
