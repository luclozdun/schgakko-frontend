import './App.css'
import { useSelector } from 'react-redux'
import { ItemList } from './app/shop/components/ItemList'
import { SignIn } from './app/security/views/SignIn'
import { NavBar } from './app/shared/components/NavBar'

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom'
import { Home } from './app/shared/views/Home'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/login' element={<SignIn/>} />
          <Route path='/shop' element={<ItemList/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App