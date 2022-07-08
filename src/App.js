import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import {AppState} from './AppContext/AppContext'
import { Users } from './Component/Users/Users';
import { Posts } from './Component/Posts/Posts';
import { Home } from './Component/Home/Home';
import { Navbar } from './Component/Navbar/Navbar';
import { About } from './Component/About/About';
import { EditUserInfo } from './Component/Users/EditUserInfo';
import { NewUser } from './Component/Users/NewUser';
import { NewPost } from './Component/Posts/NewPost';
import { EditPost } from './Component/Posts/EditPost';
import { Login } from './Component/Login/Login';
import { Profile } from './Component/Profile/Profile';

function App() {
  return (
    <AppState>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />

          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />

          <Route path='/users/update/:id' element={<EditUserInfo />} />
          <Route path='/users/new' element={<NewUser />} />

          <Route path='/posts/new/:id' element={<NewPost />} />
          <Route path='/posts/update/:id' element={<EditPost />} />

        </Routes>
      </BrowserRouter>

    </AppState>
  );
}

export default App;



// <Route path='/users/:userid' element={<User />} />
// <Route path='/posts/:postid' element={<Post />} />

// <Route path='/users/new' element={<NewUser />} />
// <Route path='/posts/new' element={<NewPost />} />

// <Route path='/users/update/:userid' element={<UpdateUser />} />
// <Route path='/posts/update/:postid' element={<UpdatePost />} />

// <Route path='/users/delete/:userid' element={<DeleteUser />} />
// <Route path='/posts/delete/:postid' element={<DeletePost />} />