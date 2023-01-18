import { Route, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import Main from '@/views/Main'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Main /></Suspense>} />
        </Routes>
    )
}

export default Router