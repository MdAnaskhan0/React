import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Componentes/Cart'

function App() {
  return (
    <div>
      <h1 className="TitleHead">Todo App</h1>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
  )
}

export default App
