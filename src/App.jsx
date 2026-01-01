import { useState } from 'react'
import Navbar from './componnents/Navbar/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        
       <Navbar />
      </div>
  )
}

export default App
