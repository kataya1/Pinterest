import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useLayoutEffect } from 'react';
import AccountSettings from './components/Settings/SideBar/Pages/AccountSettings'
import ProfileEdit from './components/Settings/SideBar/Pages/ProfileEdit'
import Claim from './components/Settings/SideBar/Pages/Claim'
import Permission from './components/Settings/SideBar/Pages/Permissions';
import Notification from './components/Settings/SideBar/Pages/Notification';
import Privacy from './components/Settings/SideBar/Pages/Privacy';
import Security from './components/Settings/SideBar/Pages/Security';
import Apps from './components/Settings/SideBar/Pages/Apps';
import CreatePin from './components/createPin/CreatePin';
import Profile from './components/Profile/Profile';
import { Authcontext } from './components/Authentication/Authcontext';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import Welcome from './components/Welcome/Welcome';
import axios from 'axios';
import R404 from './components/R404/R404';

function App() {

  // without this part going to /singup and /login will log the user out, don't know why exactly
  // it's a bit long to make sure the token is valid
  const [isUserLogedin, setisUserLogedin] = useState(false)
  useLayoutEffect(() => {
    let isValid = false;
    const token = localStorage.getItem('token')
    if (token){
      const host = "http://localhost:8000"
      const path = '/accounts/api/v1'
      const endpoint = '/example'
      axios({
        method: 'GET',
        url: `${host}${path}${endpoint}`,
        headers: {
          'Content-Type': ' application/json',
          'Authorization': 'token '+ token
        }
      }).then((response) => {
        console.log(response)
        isValid = true
      }).catch(err =>{
        if (err.response){
          console.log(err.response)
          localStorage.removeItem('token')
          isValid = false
        }
      }).finally(()=>{
        setisUserLogedin(isValid)
      })
    } 
  }, [isUserLogedin])
  // this whole crap up there can be replaced by 3 lines of code but it's not the right way to go about things
  // const token = localStorage.getItem('token')
  // let isValid = token? true : false
  // const [isUserLogedin, setisUserLogedin] = useState(isValid)



  return (
    <Router>
      <Authcontext.Provider value={{ isUserLogedin, setisUserLogedin }}>
        <Navbar />
        <Routes>
          {isUserLogedin? (
          <>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" exact element={<CreatePin />} />
            <Route path="/settings" element={<Settings />} >
              <Route path="/settings/" element={<ProfileEdit />} />
              <Route path="/settings/account-settings" element={<AccountSettings />} />
              <Route path="/settings/claim" element={<Claim />} />
              <Route path="/settings/permissions" element={<Permission />} />
              <Route path="/settings/notifications" element={<Notification />} />
              <Route path="/settings/privacy" element={<Privacy />} />
              <Route path="/settings/security" element={<Security />} />
              <Route path="/settings/apps" element={<Apps />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit" element={<ProfileEdit />} />
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
