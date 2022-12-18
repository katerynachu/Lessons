import Header from "./components/Header";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import News from "./components/News";
import bannerImg from "./assets/images/banner.jpeg"
import './assets/scss/app.scss'

function App() {
  return (
   <div className="main">
    <Header title="Blog name" />
    <Banner image ={bannerImg} title="Full-width banner image"/>
    <div className="main__wrapper">
      <Blog/>
      <News/>
    </div>
   </div>
  )
}

export default App;
