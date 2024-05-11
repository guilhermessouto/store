import { prismaClient } from '@/lib/prisma'

import Banner from './components/banner'
import Categories from './components/categories'
import ProductsList from './components/product-list'

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  return (
    <>
      <div>
        <Banner src="/banner-home-01.png" alt="Até 55% de desconto esse mês!" />
      </div>

      <main className="w-5/6 m-auto mt-14">
        <section>
          <Categories />
        </section>

        <section>
          <ProductsList products={deals} />
        </section>
      </main>
    </>
  )
}

export default Home
