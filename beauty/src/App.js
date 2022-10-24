import './App.css'
import Wrapper from './ui/Wrapper/Wrapper';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './ui/pages/Home/Home'
import About from './ui/pages/About/About'
import Order from './ui/pages/Order/Order';
import Workers from './ui/pages/Workers/Workers';
import Header from './ui/Header/Header';
const App = () => {
  return (
    <Wrapper>
      <Header>
         <Link to='/home'> Գլխավոր </Link>
         <Link to='./about'> Մեր-մասին </Link>
         <Link to='./order'> Պատվիրել </Link>
         <Link to='./workers'> Մասնագետներ </Link>
      </Header>

      <section>
        <Routes>
         <Route path='/home' element={ <Home/> } />
         <Route path='/about' element={<About />} />
         <Route path='/order' element={<Order />} />
         <Route path='/workers' element={<Workers />} />
        </Routes>
      </section>
    </Wrapper>
  )
}

export default App