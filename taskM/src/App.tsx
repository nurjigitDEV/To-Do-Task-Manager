import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './main'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
)
