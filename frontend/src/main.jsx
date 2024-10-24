import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Route } from 'react-router'
import App from './App.jsx'
import './index.css'
//import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route path='/' element={<App />}>
    
//     </Route>
    
//     </>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
