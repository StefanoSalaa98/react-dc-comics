import { useState } from 'react'
import DcHeader from './components/DcHeader'
import DcMain from './components/DcMain'
import DcFooter from './components/DcFooter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DcHeader />
      <DcMain />
      <DcFooter />
    </>
  )
}

export default App
