import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuth, signUserOut }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
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
						My Blog
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
							{!isAuth ? (
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/login'>
										<Typography color='primary' textAlign='center'>
											Login
										</Typography>
									</Link>
								</MenuItem>
							) : (
								<Button variant='contained' onClick={signUserOut}>
									Log Out
								</Button>
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

						{!isAuth ? (
							<Link to='/login'>
								<Typography textAlign='center'>Login</Typography>
							</Link>
						) : (
							<Button variant='default' onClick={signUserOut}>
								Log Out
							</Button>
						)}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
