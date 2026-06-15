import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './layout.jsx'
import Home from './component/home/Home.jsx'
import About from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import { loaderdata } from './component/github/Github.jsx'
import User from './component/User/User.jsx'
import './index.css'


import { Route, RouterProvider ,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Github from './component/github/Github.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<Contact/>}/>
      <Route 
      loader={loaderdata}
      path='github' element={<Github/>}/>
      <Route path='user' element={<User/>}>
      <Route path=':userId' element={<User/>}/></Route>
      
      

    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
