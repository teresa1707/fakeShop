import { object } from 'prop-types'
import React from 'react'
import './CartHeader.scss'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div className="cartHeader">
            {Object.keys(productsInCart).map((id) => (
                <div>
                    {id}:{productsInCart[id]}
                </div>
            ))}
        </div>
    )
}
