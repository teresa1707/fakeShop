import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { CartPage } from 'pages/Cart/CartPage'
import { PaymentPage } from 'pages/Payment/PaymentPage'
import { ProductsPage } from 'pages/Products/ProductsPage'
import { ShippingPage } from 'pages/Shipping/ShippingPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Main = ({
    productsInCart,
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductsList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}
