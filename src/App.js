import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/create-post' element={<CreatePost />}/>
      </Routes>
    </Router>
  );
}

export default App;
