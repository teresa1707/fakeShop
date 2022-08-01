import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { keys } from 'lodash'
import { getProductsObject } from 'utils/productsArray'
import { CartProductList } from 'components/Cart/CartProductList'
import { Card } from '@mui/material'

export const CheckoutPageHook = () => {
    const [orderDetails, setOrderDetails] = useState({
        name: '',
        address: '',
        isOrderSent: false,
    })

    const productsInCart = useSelector(({ productsInCart }) => productsInCart)
    const prodArray = useSelector((state) => state.products)
    const prodObject = getProductsObject(prodArray)

    const orderName = (e) =>
        setOrderDetails((prevState) => ({ ...prevState, name: e.target.value }))

    const orderAddress = (e) =>
        setOrderDetails((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))

    const renderForm = () => {
        return (
            <form onSubmit={sendForm}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={orderDetails.name}
                        onChange={orderName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={orderDetails.address}
                        onChange={orderAddress}
                    />
                </div>
                <button>Send</button>
            </form>
        )
    }

    const sendForm = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderDetails.name,
                    address: orderDetails.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) =>
                setOrderDetails({
                    name,
                    address,
                    isOrderSent: true,
                })
            )
    }

    const renderMessage = () => {
        return (
            <>
                <Card
                    style={{
                        marginBottom: '10px',
                        padding: 20,
                        background: '#2E3B55',
                        color: 'white',
                    }}
                >
                    <p>Dear {orderDetails.name} , thank you for your order!</p>
                    <p>Delivery address: {orderDetails.address}</p>
                </Card>
                <Card
                    style={{
                        marginBottom: '10px',
                        padding: 20,
                        background: '#2E3B55',
                        color: 'white',
                    }}
                >
                    <p
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        The details of your order:
                    </p>

                    <CartProductList productsInCart={productsInCart} />
                    <p>
                        TOTAL PAYED:
                        <span style={{ padding: '0 10px' }}>
                            {keys(productsInCart).reduce(
                                (total, productId) =>
                                    total +
                                    productsInCart[productId] *
                                        prodObject[productId].price,
                                0
                            )}
                        </span>
                        $ .
                    </p>
                </Card>
            </>
        )
    }

    return (
        <>
            <h1>Checkout Page</h1>
            {orderDetails.isOrderSent !== true ? renderForm() : renderMessage()}
        </>
    )
}
