import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import { Menu } from 'components/Menu/Menu'
import { CartHeader } from 'components/Cart/CartHeader'

export const Header = ({ cartData }) => {
    return (
        <>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Fake Shop
                        </Typography>
                        <Menu />
                        <CartHeader cartData={cartData} />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
