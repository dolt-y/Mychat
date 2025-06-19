import { useEffect, useState } from 'react'
import Header from './components/header';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import util from './utils'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('count is', count)
    console.log(util.isMobile())
  },[])
  return (
    <>
      <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
           
        </p>
      </div>
      <p className="read-the-docs">
        似水年华
      </p>
    </>
  )
}

export default App
