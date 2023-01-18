import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from "recoil"
const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
    <RecoilRoot>
        <BrowserRouter>
            
                <App />
        </BrowserRouter>
    </RecoilRoot>
)
