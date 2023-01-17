import Router from '@/router'
import { useState } from 'react'

const App = () => {
    const [global, setGlobal] = useState({})

    return (
        <div className="wrap">
            <Router />
        </div>
    )
}

export default App
