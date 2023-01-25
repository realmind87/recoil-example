import { Route, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import Main from '@/views/Main'
import TestView from '@/views/TestView'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Main /></Suspense>} />
            <Route path='test' element={<Suspense fallback={<div>Loading...</div>}><TestView /></Suspense>} />
        </Routes>
    )
}

export default Router