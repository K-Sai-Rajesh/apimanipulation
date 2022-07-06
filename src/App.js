import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './Component/About/About';
import { Posts } from './Component/Post/Post';
import { Home } from './Component/Home/Home';
import { Navbar } from './Component/Navbar/Navbar';
import { EditPost } from './Component/EditPost/EditPost';
import { AppState } from './AppContext/AppContext';
import { Users } from './Component/Users/Users';
import { NewPost } from './Component/NewPost/NewPost';

function App() {
  return (
    <AppState>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/post' element={<Posts />} />
          <Route path='/post/:PostId' element={<EditPost />} />
          <Route path='/post/new/:UserId' element={<NewPost />} />
          <Route path='/user' element={<Users />} />
        </Routes>
      </BrowserRouter>

    </AppState>
  );
}

export default App;
