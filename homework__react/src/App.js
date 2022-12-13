import Header from "./components/Header";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import News from "./components/News";

function App() {
  return (
   <div className="main">
    <Header/>
    <Banner/>
    <div className="main__wrapper">
      <Blog/>
      <News/>
    </div>
   </div>
  )
}

export default App;
