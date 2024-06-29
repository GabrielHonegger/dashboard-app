import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ContextProvider } from './contexts/ContextProvider.jsx'

import {NextUIProvider} from '@nextui-org/react'


registerLicense('ORg4AjUWIQA/Gnt2U1hhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5VdENiWXtWdHVSR2Jb');



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <NextUIProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </NextUIProvider>
    </React.StrictMode>,
)
