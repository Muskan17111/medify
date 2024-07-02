import React, { useState } from 'react';
import logo from '../../assests/logo.svg'; 
import { Box, Typography, IconButton, useMediaQuery, Stack, Container, Drawer} from '@mui/material';
import BasicTabs from './tab'; 
import CustomButton from '../button/button'; 

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.css'; 

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setMenuOpen(open);
  };

  return (
    <Box>
     <Box p={1} bgcolor="primary.main">
        <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container>
        <Stack className='navbar' direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            <img src={logo} alt="medify Logo" />
          </Box>
          {!isMobile && (
            <Stack direction="row" alignItems="center" spacing={2}>
              <BasicTabs />
              <CustomButton text="My Bookings" />
            </Stack>
          )}
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>

      <Drawer  anchor="right" open={menuOpen} onClose={toggleDrawer(false)}    sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#102851',
            color: 'white',
          },
        }}>
        <Box
          sx={{ maxWidth: 900 }}
          role="presentation"
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "#000",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Stack  direction="column" spacing={2} mt={5} px={2}>
            <BasicTabs />
            <CustomButton text="My Bookings" />
          </Stack>
        </Box>
      </Drawer>

    </Box>
  );
}