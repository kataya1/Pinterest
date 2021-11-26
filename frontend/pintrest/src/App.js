import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AccountSettings from './components/Settings/SideBar/Pages/AccountSettings'
import ProfileEdit from './components/Settings/SideBar/Pages/ProfileEdit'
import Claim from './components/Settings/SideBar/Pages/Claim'
import Permission from './components/Settings/SideBar/Pages/Permissions';
import Notification from './components/Settings/SideBar/Pages/Notification';
import Privacy from './components/Settings/SideBar/Pages/Privacy';
import CreatePin from './components/createPin/CreatePin';
import Profile from './components/Profile/Profile';
import { Authcontext } from './components/Authentication/Authcontext';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import Welcome from './components/Welcome/Welcome';
import axios from 'axios';
import R404 from './components/R404/R404';
import PinView from './components/History/viewpins';
import History from './components/History/History';


function App() {
  const host = 'http://localhost:8000'
  const token = localStorage.getItem('token')
  let isValid = token? true : false
  const [isUserLogedin, setisUserLogedin] = useState(isValid)
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
      if (isUserLogedin){
        const host = "http://localhost:8000"
        const path = '/accounts/api/v1'
        const endpoint = '/profile'
        axios({
          method: 'GET',
          url: `${host}${path}${endpoint}`,
          headers: {
            'Content-Type': ' application/json',
            'Authorization': 'token '+ token
          }
        }).then((response) => {
          setCurrentUser(response.data)
          console.log(response)
        }).catch(err =>{
          if (err.response){
            console.log(err.response)
          }
        }).finally(()=>{
          setisUserLogedin(isValid)
        })
      }
      else{
        setCurrentUser({})
      }
    }, [isUserLogedin])
  
  return (  
    <Router>
      <Authcontext.Provider value={{ isUserLogedin, setisUserLogedin, currentUser, host }}>
        <Navbar />
        <Routes>

          {isUserLogedin? (
          <>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" exact element={<CreatePin />} />
            <Route path="pin/:Id" element={<PinView/>}/>
            <Route path="/settings" element={<Settings />} >
              <Route path="/settings/" element={<ProfileEdit />} />
              <Route path="/settings/account-settings" element={<AccountSettings />} />
              <Route path="/settings/claim" element={<Claim />} />
              <Route path="/settings/permissions" element={<Permission />} />
              <Route path="/settings/notifications" element={<Notification />} />
              <Route path="/settings/privacy" element={<Privacy />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit" element={<History/>} />
          </>) : (
          <>
            <Route path="/" exact element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
          )}
          <Route path="*" element={<R404/>}></Route>

        </Routes>
      </Authcontext.Provider>
    </Router>
  );
}

export default App;
