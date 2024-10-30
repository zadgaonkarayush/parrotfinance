import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Setting from './components/Setting';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Dashboard />} ></Route>
    // </Routes>
    // </BrowserRouter>
    <>
    <Dashboard />
    </>
  )
}

export default App
