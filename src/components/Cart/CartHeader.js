import React from 'react'
import styles from './CartHeader.module.css'

export const CartHeader = () => {
    return (
        <>
            <div className={styles.cartHeader}>
                <div>0</div>
                <div>0$</div>
            </div>
        </>
    )
}
