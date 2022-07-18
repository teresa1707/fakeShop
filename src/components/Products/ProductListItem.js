import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React from 'react'
import './ProductListItem.scss'
import PropTypes from 'prop-types'

export const ProductListItem = ({
    image,
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <h2>{name}</h2>
                    <p className="product-description">{description}</p>
                    <div className="product-features">
                        <span>Type : </span>
                        {type}
                    </div>
                    <div className="product-features">
                        <span>Capacity : </span>
                        {capacity}Gb
                    </div>
                    <div className="product-price">{price} $</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
                    </div>
                </CardContent>
                <CardActions className="add-to-cart-block">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number,
}

// ProductsListItems.defaultProps = {
//     description: 'No desc...',
//     image: 'images/no-image.jpg',
// }
