import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { Reviews } from 'components/Reviews/Reviews'
import { CartPage } from 'pages/Cart/CartPage'
import { PaymentPage } from 'pages/Payment/PaymentPage'
import { ProductsPage } from 'pages/Products/ProductsPage'
import { ShippingPage } from 'pages/Shipping/ShippingPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
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
                            <>
                                <ProductsList
                                    addProductToCart={addProductToCart}
                                />
                                <Reviews />
                            </>
                        }
                    />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
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
