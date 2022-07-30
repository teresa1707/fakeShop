import React, { useEffect, useState } from 'react'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { CssBaseline } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'redux/products.action'

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    })
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
