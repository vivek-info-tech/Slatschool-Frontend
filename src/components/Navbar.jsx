import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
//  import {assets} from '../assets/assets'

 

export default function Navbar() { 
	const {navigate}=useNavigate();
	return (
		<div className='flex justify-between items-center border-b text-sm mb-5 py-3 px-2 border-b-gray-400  cursor-pointer'>
			<h1 onClick={()=>navigate('/')} className='text-blue-500 font-bold text-5xl'>Slateschool</h1>
			<ul className='md:flex hidden items-start font-medium gap-5'>
				<NavLink to='/'>

					<div className='py-2'><li >Home</li><img className='w-2' src='' alt="" /></div>
					<hr  className=' h-0.5 border-none bg-primary hidden outline-none w-3/5 m-auto  '  />
				</NavLink>
				<NavLink to='/preperations' >

					<li className='py-2'>Preparation</li> 
					<hr className=' h-0.5 border-none bg-primary hidden outline-none w-3/2  m-auto ' />
				</NavLink>
				<NavLink to='/placement' >

					<li className='py-2'>Placements</li>
					<hr className=' h-0.5 border-none bg-primary hidden outline-none w-3/2 m-auto  ' />
				</NavLink>
				<NavLink to='/interview'>

					<li className='py-2'>Interview</li>
					<hr className=' h-0.5 border-none bg-primary hidden outline-none w-3/2 m-auto  ' />
				</NavLink>
				<NavLink to='/contact'>

					<li className='py-2'>Contact us</li>
					<hr className=' h-0.5 border-none bg-primary hidden outline-none w-3/2 m-auto ' />
				</NavLink>
				<NavLink to='/about'>

					<li className='py-2'>About us</li>
					<hr className=' h-0.5 border-none bg-primary hidden outline-none w-3/2  m-auto ' />
				</NavLink>
			</ul>
			<button  onClick={()=>{navigate('/login')}} className='py-3 px-7 rounded-full text-white font-light  bg-primary hidden md:block'> Login/Sign up</button>
		</div>
	)
}
