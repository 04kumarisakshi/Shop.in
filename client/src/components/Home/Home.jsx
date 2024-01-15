import Categories from "../Catogries/Categories"
import FeatureProduct from "../FeatureProduct/FeatureProduct"
import Slider from "../Slider/Slider"


function Home() {
  return (
    <div className="home">
 <Slider/>
 <FeatureProduct type="featured"/>
 <Categories/>
 <FeatureProduct type="trending"/>
    </div>
  )
}

export default Home