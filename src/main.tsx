import { StrictMode } from 'react' 
//maybe remove strictmode later, its for like catching errors and stuff 
//but apparently it could cause some issues where things render twice, keep it for now
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
