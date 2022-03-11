import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';

const Navbar = ({ isAuth, signUserOut }) => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						{auth.currentUser !== null
							? `${auth.currentUser.displayName}'s Blog`
							: 'My Blog'
						}
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link to='/'>
									<Typography color='primary' textAlign='center'>
										Home
									</Typography>
								</Link>
							</MenuItem>
							{isAuth && (
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/create-post'>
										<Typography color='primary' textAlign='center'>
											Create Post
										</Typography>
									</Link>
								</MenuItem>
							)}
							{!isAuth && (
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/login'>
										<Typography color='primary' textAlign='center'>
											Login
										</Typography>
									</Link>
								</MenuItem>
							)}
						</Menu>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						My Blog
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link to='/'>
							<Typography textAlign='center'>Home</Typography>
						</Link>
						{isAuth && (
							<Link to='/create-post'>
								<Typography textAlign='center'>Create Post</Typography>
							</Link>
						)}

						{!isAuth && (
							<Link to='/login'>
								<Typography textAlign='center'>Login</Typography>
							</Link>
						)}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='More options'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar
									alt='user profile'
									src={
										auth.currentUser !== null
											? auth.currentUser.photoURL
											: '/static/images/avatar/2.jpg'
									}
								/>
							</IconButton>
						</Tooltip>
						{isAuth && (
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem onClick={signUserOut}>
									<Typography textAlign='center'>Log Out</Typography>
								</MenuItem>
							</Menu>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
