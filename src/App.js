import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './Component/About/About';
import { Posts } from './Component/Post/Post';
import { Home } from './Component/Home/Home';
import { Navbar } from './Component/Navbar/Navbar';
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

          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />

          <Route path='/users/:userid' element={<User />} />
          <Route path='/posts/:postid' element={<Post />} />

          <Route path='/users/new' element={<NewUser />} />
          <Route path='/posts/new' element={<NewPost />} />

          <Route path='/users/update/:userid' element={<UpdateUser />} />
          <Route path='/posts/update/:postid' element={<UpdatePost />} />

          <Route path='/users/delete/:userid' element={<DeleteUser />} />
          <Route path='/posts/delete/:postid' element={<DeletePost />} />


        </Routes>
      </BrowserRouter>

    </AppState>
  );
}

export default App;
