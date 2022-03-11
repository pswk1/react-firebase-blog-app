import React from 'react';
import { auth, provider } from '../firebase-config';
import {
	signInWithPopup,
	setPersistence,
	browserSessionPersistence,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Login = ({ setIsAuth }) => {
	const navigate = useNavigate();

	const signInWithGoogle = () => {
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				signInWithPopup(auth, provider);
				navigate('/');
				setIsAuth(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='center'
			padding={6}
		>
			<Grid item marginBottom={5}>
				<Typography noWrap variant='h4'>
					Sign In With Google to Continue
				</Typography>
			</Grid>

			<Grid item>
				<GoogleButton onClick={signInWithGoogle}>
					Sign In With Google
				</GoogleButton>
			</Grid>
		</Grid>
	);
};

export default Login;
