import React from 'react'

export const CartProductListItem = ({ product, productCount }) => {
    return (
        <div>
            <div>
                {product.name}:{productCount}
            </div>
        </div>
    )
}
