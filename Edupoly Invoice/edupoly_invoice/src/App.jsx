import { useState } from 'react'
import './App.css'
import Invoice from './pages/Invoice'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Invoice></Invoice>
    
    <Outlet></Outlet>
    </>
  )
}

export default App
