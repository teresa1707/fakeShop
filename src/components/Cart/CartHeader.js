import React from 'react'
import './CartHeader.scss'

export const CartHeader = ({ cartData }) => {
    return (
        <>
            <div className="cartHeader">
                <div>{cartData.count}</div>
                <div>{cartData.price}$</div>
            </div>
        </>
    )
}
