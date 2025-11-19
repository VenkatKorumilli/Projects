import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HighcourtForm from './pages/HighcourtForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HighcourtForm/>
    </>
  )
}

export default App
