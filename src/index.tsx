import { createRoot } from 'react-dom/client'
import App from '@/App'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from "recoil"
import GlobalStyles from './GlobalStyles'
const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
    <RecoilRoot>
        <BrowserRouter>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </RecoilRoot>
)
