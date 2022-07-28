import { object } from 'prop-types'
import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div className="cartHeader">
            {keys(productsInCart).map((id) => (
                <div key={id}>
                    {id}:{productsInCart[id]}
                </div>
            ))}
        </div>
    )
}
