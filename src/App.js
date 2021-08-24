import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index"
import Navbar from "./components/navbar/index" 
import Hero from "./components/hero/index"
import Banners from "./components/banners/banner1"
import Donate from "./components/donate/index"
import Numbers from "./components/numbers/impacted"
import Mission from "./components/mission/index"
import Graph from "./components/graph/graph"
import Card from "./components/card/card1"
import Banner2 from "./components/banner2/banner2"
import Form from './components/form/form'
import Crousel from "./components/crousel/crousel"
import Banner3 from "./components/banner3/banner3"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Hero/>
     <Banners/>
     <Donate/>
     <Numbers/>
     <Mission/>
     <Crousel/>
     <Graph/>
     <Card/>
     <Banner2/>
     <Form/>
     <Banner3/>
     
     <Footer/>
    </div>
  );
}

export default App;
