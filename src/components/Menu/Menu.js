import React from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

export const Menu = () => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Home
                </NavLink>
            </Button>

            <Button color="inherit">
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    products
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/shipping"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    shipping
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/payment"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    payment
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? 'active-menu-NavLink' : 'menu-NavLink'
                    }
                >
                    Cart
                </NavLink>
            </Button>
        </>
    )
}
