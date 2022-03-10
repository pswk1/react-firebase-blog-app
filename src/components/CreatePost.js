/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import {
	Grid,
	Typography,
	TextareaAutosize,
	TextField,
	Button,
} from '@mui/material';

const CreatePost = ({ isAuth }) => {
	const [title, setTitle] = useState('');
	const [post, setPost] = useState('');

	const handleTitle = (e) => {
		const title = e.target.value;
		setTitle(title);
	};

	const handlePost = (e) => {
		const postText = e.target.value;
		setPost(postText);
	};

	const postsCollectionRef = collection(db, 'posts');
	const navigate = useNavigate();

	const createPost = async () => {
		await addDoc(postsCollectionRef, {
			title,
			post,
			author: {
				name: auth.currentUser.displayName,
				id: auth.currentUser.uid,
			},
		});
		navigate('/');
	};

	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		}
	}, []);

	return (
		<Grid
			container
			direction='column'
			justifyContent='flex-start'
			alignItems='center'
			sx={{
				height: '100vh',
				width: '80vw',
				background: 'white',
				margin: '0 auto',
			}}
		>
			<Grid
				item
				sx={{
					margin: '50px 0',
				}}
			>
				<Typography variant='h3'>Create a Post</Typography>
			</Grid>

			<Grid
				item
				sx={{
					marginBottom: '50px',
				}}
			>
				<TextField label='Title:' onChange={handleTitle} variant='outlined' />
			</Grid>

			<Grid
				item
				sx={{
					marginBottom: '50px',
				}}
			>
				<TextareaAutosize
					placeholder='Post:'
					style={{
						width: {
							xs: 200,
							sm: 300,
							md: 400,
						},
					}}
					minRows={4}
					maxRows={6}
					onChange={handlePost}
				/>
			</Grid>

			<Grid item>
				<Button variant='contained' onClick={createPost}>
					Submit Post
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreatePost;
