/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Typography, IconButton } from '@mui/material';

const Home = ({ isAuth }) => {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, 'posts');

	const deletePost = async (id) => {
		const postDoc = doc(db, 'posts', id);
		await deleteDoc(postDoc);
	};

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getPosts();
	}, [deletePost]);

	const postStyles = {
		minWidth: '370px',
		width: '600px',
		height: 'auto',
		maxHeight: '600px',
		backgroundColor: 'rgb(250, 250, 250)',
		boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
		margin: '20px',
		padding: '20px',
		borderRadius: '15px',
	};

	const textStyles = {
		wordWrap: 'break-word',
		height: 'auto',
		maxHeight: '400px',
		width: '100%',
		overflow: 'hidden',
		overflowY: 'auto',
	};

	return (
		<Grid
			container
			direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{
				height: 'auto',
				minHeight: 'calc(100vh - 80px)',
			}}
		>
			{posts.map(({ id, title, post, author }) => (
				<Grid key={id} item container sx={postStyles}>
					<Grid
						item
						container
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Typography gutterBottom variant='h4'>
							{title}
						</Typography>

						{(isAuth && author.id === auth.currentUser.uid) && (
							<IconButton aria-label='delete' onClick={() => deletePost(id)}>
								<DeleteIcon />
							</IconButton>
						)}
					</Grid>
					<Grid item sx={textStyles}>
						{post}
					</Grid>
					<Grid item>
						<Typography marginTop={2}>@{author.name}</Typography>
					</Grid>
				</Grid>
			))}
		</Grid>
	);
};

export default Home;
