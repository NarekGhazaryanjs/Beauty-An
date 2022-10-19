import './App.css'
import Wrapper from './ui/Wrapper/Wrapper';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './ui/pages/Home/Home'
import About from './ui/pages/About/About'
import Order from './ui/pages/Order/Order';
import Workers from './ui/pages/Workers/Workers';
const App = () => {
  return (
    <Wrapper>
      <header>
         <Link to='/home'> Home </Link>
         <Link to='./about'> About </Link>
         <Link to='./order'> Order </Link>
         <Link to='./workers'> Workers </Link>
      </header>

      <section>
        <Routes>
         <Route path='/' element={ <Home/> } />
         <Route path='/about' element={<About />} />
         <Route path='/order' element={<Order />} />
         <Route path='/workers' element={<Workers />} />
        </Routes>
      </section>
    </Wrapper>
  )
}

export default App