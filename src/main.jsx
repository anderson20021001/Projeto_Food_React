import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/index.jsx'
import Search from './components/search/index.jsx'
import Button from './components/button/index.jsx'
import "./index.css";
import Home from './pages/home/index.jsx'

createRoot(document.getElementById('root')).render( <Home/>)

