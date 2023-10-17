import React, { useEffect, useState } from 'react';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import profileImage from '../assets/profile.jpg';

import axios from 'axios';
import { usePlaidLink } from 'react-plaid-link';

// Project 1 (working baseURL)
//axios.defaults.baseURL = 'http://localhost:5001';

// Project 1 (additional component)
// function PlaidAuth({ publicToken }) {
//   useEffect(() => {
//     async function fetchData() {
//       let accessToken = await axios.post('/exchange_public_token', {
//         public_token: publicToken,
//       });
//       console.log('accessToken', accessToken.data);
//       const auth = await axios.post('/auth', {
//         access_token: accessToken.data.accessToken,
//       });
//       console.log('auth data', auth.data);
//     }
//     fetchData();
//   }, []);
//   return <span>{publicToken}</span>;
// }

function Navbar({ user, isSidebarOpen, setIsSidebarOpen }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  // Project 1 (working useEffect)
  // useEffect(() => {
  //   async function fetch() {
  //     const response = await axios.post('/create_link_token');
  //     setLinkToken(response.data.link_token);
  //     console.log('response', response.data);
  //   }

  //   fetch();
  // }, []);

  // Project 1 (usePlaidLink)
  // const { open, ready } = usePlaidLink({
  //   token: linkToken,
  //   onSuccess: (public_token, metadata) => {
  //     setPublicToken(public_token);
  //     console.log('success', public_token, metadata);
  //     // send public_token to server
  //   },
  // });

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* Right side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransfor: 'none',
                gap: '1rem',
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32x"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user?.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
          {/* Project 1 button */}
          {/* {publicToken ? (
            <PlaidAuth publicToken={publicToken} />
          ) : (
            <button onClick={() => open()} disabled={!ready}>
              Connect a bank account
            </button>
          )} */}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
