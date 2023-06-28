//import Home from "./pages/home/Home";
import React, { useContext } from 'react';
import Topbar from './components/topbar/Topbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profilePage/profile';
import Login from './pages/login/login';
import Rightbar from './components/rightbar/Rightbar';
import Signin from './pages/signup/Signup';
import { RequiresAuth } from './Authentication/RequireAuth';
import { AuthContext } from './Authentication/AuthContext';
import { UserPage } from './pages/UserPages/UserPage';
import Bookmarks from './pages/BookmarkPage/Bookmark';



function App() {
  const {user} = useContext(AuthContext);
  const {encodedToken} = user;
  return(
    <>
    {
      encodedToken &&  <Topbar/>
    }
   


    <Routes>
    
    <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />

    <Route
          path="/bookmarks"
          element={
            <RequiresAuth>
              <Bookmarks/>
            </RequiresAuth>
          }
        />
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signin/>}/>
    
    <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/peopleprofile/:_id"
          element={
            <RequiresAuth>
              <UserPage/>
            </RequiresAuth>
          }
        />
    <Route path ="/rightbar" element={<Rightbar/>}/>
    
    </Routes>
    </>
  );
}

export default App;
