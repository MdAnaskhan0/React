import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import ContactLayout from './Layout/ContactLayout'
import ContactInfo from './Components/ContactInfo'
import ContactForm from './Components/ContactForm'
import NotFound from './Components/NotFound'


const App = () => {

  const customRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={customRouter} />
  )
}

export default App