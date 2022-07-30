import React, { useState } from 'react'
import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { CssBaseline } from '@mui/material'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
