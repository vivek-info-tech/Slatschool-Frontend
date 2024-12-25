 import React from 'react'
 import{Routes,Route} from 'react-router-dom'
 import Home from './pages/Home'
 import About from './pages/About'
 import Placement from './pages/Placement'
import Interview from './pages/Interview'
import Contact from './pages/Contact'
import Preperations from './pages/Preperations'
import Navbar from './components/Navbar'
import Login from './pages/Login'
 export default function App() {
   return (
     <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/preperations' element={<Preperations/>} />
        <Route path='/interview' element={<Interview/>} />
        <Route path='/placement' element={<Placement/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />

       </Routes>
       
     </div>
   )
 }
 