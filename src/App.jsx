import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
          <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8">Sam Bowen Portfolio</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition-colors"
        >
          count is {count}
        </button>
        <p className="text-gray-300">
          Edit <code className="bg-gray-700 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400 mt-8 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
