import { useState } from 'react'
import './App.css'
import GaleriaDeImagens from './GaleriadeImgs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GaleriaDeImagens/>
    </>
  )
}

export default App
