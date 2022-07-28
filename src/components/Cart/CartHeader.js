import { object } from 'prop-types'
import React from 'react'
import './CartHeader.scss'
import { keys } from 'lodash'
import productsArray from 'utils/productsArray'

export const CartHeader = ({ productsInCart }) => {
    return (
        <div className="cartHeader">
            <div>
                {keys(productsInCart).map((id) => (
                    <div key={id}>
                        {id}:{productsInCart[id]}
                    </div>
                ))}
            </div>

            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (total, id) =>
                        total +
                        productsInCart[id] * productsArray[id - 1].price,
                    0
                )}{' '}
                $
            </div>
        </div>
    )
}
