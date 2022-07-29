import React from 'react'
import { Button, TextField } from '@mui/material'

export const Quantity = ({ onDecrementClick, onIncrementClick, count }) => {
    return (
        <div className="product-quantity">
            <Button
                variant="contained"
                onClick={onDecrementClick}
                disabled={count <= 1}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button
                variant="contained"
                onClick={onIncrementClick}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
