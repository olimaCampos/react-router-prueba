//context
import ContextProvider from './context/AppContext'
//components
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
//views
import Home from './views/Home'
import Pizzas from './views/Pizzas'
import PizzaDetail from './views/PizzaDetail'
import Cart from './views/Cart'
import NotFound from './views/NotFound'


function App() {

  return (
    <ContextProvider>
      <Navbar />
      <Container className='bg-white pb-3 main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizzas />} />
          <Route path="/pizza/:pizzaName" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ContextProvider>
  )
}

export default App
