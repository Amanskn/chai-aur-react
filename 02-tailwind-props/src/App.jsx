import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-900 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card btnText="Visit me" var1="Aman" var2="67" arr1={[1,2,33]}/>
    <Card arr1={[34,45,689078]} btnText="Click me"/>
    <h2>The Start</h2>
    <h2>The Start of new era</h2>
   
    </>
  )
}

export default App
