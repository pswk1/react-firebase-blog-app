import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate} from 'react-router-dom';
import GoogleButton from 'react-google-button';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
				navigate('/');
			})
			.catch((error) => {
        console.log(error);
			});
	};
	return (
		<div className='loginPage'>
			<p>Sign In With Google to Continue</p>
			<GoogleButton onClick={signInWithGoogle} >Sign In With Google</GoogleButton>
		</div>
	);
};

export default Login;
