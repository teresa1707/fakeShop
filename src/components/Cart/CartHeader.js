import { object } from 'prop-types'
import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div className="cartHeader" key={id}>
            {keys(productsInCart).map((id) => (
                <div>
                    {id}:{productsInCart[id]}
                </div>
            ))}
        </div>
    )
}
