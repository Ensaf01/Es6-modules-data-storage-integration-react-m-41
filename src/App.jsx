import { useState } from 'react'
import './App.css'
import Watch from './components/watch/watch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Get started</h1>
     <Watch></Watch>
    </>
  )
}

export default App
