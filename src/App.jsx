import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import ResponsiveAppBar from './components/Navbar'
import Login from './components/Login'
import './App.css'
import axios from 'axios'
import Carrosal from './components/Carrosal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <Login />

      {/* <ResponsiveAppBar />
      <h2>Welcome dear User</h2> */}
      {/* <Carrosal/> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Hellow World!</h1>
    </div>
  )
}

export default App
