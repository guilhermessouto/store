import { prismaClient } from '@/lib/prisma'

import Banner from './components/banner'
import Categories from './components/categories'
import ProductsList from './components/product-list'
import SectionTitle from './components/section-title'

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })

  return (
    <>
      <div>
        <Banner
          src="/banner-home-01.png"
          alt="Até 55% de desconto só esse mês!"
        />
      </div>

      <main className="w-11/12 m-auto mt-14 space-y-10">
        <section>
          <Categories />
        </section>

        <section className="space-y-3">
          <SectionTitle title="Ofertas" />
          <ProductsList products={deals} />
        </section>

        <section className="flex items-center gap-3 flex-col md:flex-row">
          <Banner
            src="/banner-home-02.png"
            alt="Até 55% de desconto em mouses!"
            className="md:w-2/4"
          />
          <Banner
            src="/banner-home-03.png"
            alt="Até 20% de desconto em fones!"
            className="md:w-2/4"
          />
        </section>

        <section className="space-y-3">
          <SectionTitle title="Teclados" />
          <ProductsList products={keyboards} />
        </section>

        <section>
          <Banner
            src="/banner-home-04.png"
            alt="Frete grátis para todo o Brasil!"
          />
        </section>

        <section className="space-y-3">
          <SectionTitle title="Mouses" />
          <ProductsList products={mouses} />
        </section>
      </main>
    </>
  )
}

export default Home
