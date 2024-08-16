import './App.css'
import Navbar from './Components/main/Navbar';
import Category from './Components/main/Category';
import CategoryHighlights from './Components/main/CategoryHiglights';
import Hero1 from './Components/main/็้Hero1'
import Footer from './Components/main/Footer';
import RoomInspiration from './Components/main/RoomInspiration';
import FuniroFurniture from './Components/main/FuniroFurniture';
import ProductCard from './Components/main/ProductCard';
import Heroshop from './Components/Pageshop/mainshop';



function App() {
  

  return (
    <div>
      <Navbar/>
      <Heroshop/>
      <Hero1/>
      <CategoryHighlights/>
      <ProductCard/>
      <Category/>
      <RoomInspiration/>
      <FuniroFurniture/>
      <Footer/>
      
    </div>
  )
}

export default App
