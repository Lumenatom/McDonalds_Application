import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Normalize} from 'styled-normalize'
import {Toaster} from "react-hot-toast";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Normalize/>
        <App/>
        <Toaster />
    </React.StrictMode>,
)
