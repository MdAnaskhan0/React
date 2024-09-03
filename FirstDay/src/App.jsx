import { useState } from 'react'
import './App.css'
import './index.css'


function App() {
  const date = new Date()
  const dateName = date.getDate()
  const monthName = date.getMonth()
  const yearName = date.getFullYear()
  const hours = date.getHours()
  const minuit = date.getMinutes()
  const second = date.getSeconds()

  const descriptionCss = {
    backgroundColor : "#000",
    color : "#fff",
    textAlign : "center"
  }
  return (
    <div className='date-style'>
      <h1> Date: {dateName + "/" + monthName + "/" + yearName}</h1>
      <h2 > Time: {hours + ":" + minuit + ":" + second}</h2>


    </div>
  )
}

export default App
