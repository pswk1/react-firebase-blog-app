/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [ title, setTitle] = useState('');
  const [ post, setPost] = useState('');

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  }

  const handlePost = e => {
    const postText = e.target.value;
    setPost(postText);
  }

  const postsCollectionRef = collection(db, 'posts');
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post, 
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });
    navigate('/');
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

	return (
		<div>
			<div>
				<h1>Create a Post</h1>
        <div>
          <label>Title: </label>
          <input value={title} onChange={handleTitle} placeholder='Title' />
        </div>

        <div>
          <label>Post: </label>
          <textarea value={post} onChange={handlePost} placeholder='Post' />
        </div>
        <button onClick={createPost}>Submit Post</button>
			</div>
		</div>
	);
};

export default CreatePost;
