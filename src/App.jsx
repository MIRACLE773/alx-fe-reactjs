import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="flex flex-col justify-center items-center ">

      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Hello world!
      </h1>

      <input
        type="text"
        placeholder="Enter your first name"
        className="border-2 border-yellow-500 p-3 rounded-xl 
                  "
      />

    </div>
  );
}

export default App;
