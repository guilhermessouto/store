import Banner from './components/banner'
import Categories from './components/categories'

const Home = () => {
  return (
    <>
      <div>
        <Banner src="/banner-home-01.png" alt="Até 55% de desconto esse mês!" />
      </div>

      <div>
        <Categories />
      </div>
    </>
  )
}

export default Home
