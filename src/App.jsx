import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch';

function App() {
  const [count, setCount] = useState(0)
  // create fake data for sunglass and watch
  const watchData = [
    {id:1, name:'Rolex', price: 5000},
    {id:2, name:'Casio', price: 100},
    {id:3, name:'Fossil', price: 200},
  ]
  return (
    <>
     <h1>Sunglass and Watch </h1>
     {/* <Watch></Watch> */}
     {
      watchData.map(watchs => <Watch key={watchs.id}  watch={watchs}></Watch> )
     }
    </>
  )
}

export default App
