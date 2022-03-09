import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to='/' >Home</Link>
        <Link to='/create-post' >Create Post</Link>
        <Link to='/login' >Login</Link>
      </nav> */}
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/create-post' element={<CreatePost />}/>
      </Routes>
    </Router>
  );
}

export default App;
