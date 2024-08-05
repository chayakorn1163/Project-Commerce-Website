import './App.css'
import Navbar from './Components/Navbar'
import Hero1 from './Components/็้Hero1'
import CategoryHiglights from './Components/CategoryHiglights'
import ProductCard from './Components/ProductCard';
import Category from './Components/Category';


function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero1/>
      <CategoryHiglights/>
      <Category title="Electronics" products={[
        {id: 1, name: 'Laptop', price: 1500, image: 'https://picsum.photos/id/237/200/300'},
        {id: 2, name: 'Smartphone', price: 800, image: 'https://picsum.photos/id/238/200/300'},
        {id: 3, name: 'Headphones', price: 50, image: 'https://picsum.photos/id/239/200/300'},
      ]}/>
      <Category title="Clothing" products={[
        {id: 4, name: 'Shirt', price: 50, image: 'https://picsum.photos/id/240/200/300'},
        {id: 5, name: 'Pants', price: 100, image: 'https://picsum.photos/id/241/200/300'},
        ]}/>
      <ProductCard product={{id: 6, name: 'Jacket', price: 200, image: 'https://picsum.photos/id/242/200/300'}}/>
    </div>
  )
}

export default App
