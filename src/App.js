import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
	const [isAuth, setIsAuth] = useState(false);

	const signUserOut = () => {
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			window.location.pathname = '/login';
		});
	};
	

	return (
		<Router>
			<Navbar isAuth={isAuth} signUserOut={signUserOut} />
			<Routes>
				<Route path='/' element={<Home isAuth={isAuth} />} />
				<Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
				<Route path='/create-post' element={<CreatePost isAuth={isAuth} />} />
			</Routes>
		</Router>
	);
}

export default App;
