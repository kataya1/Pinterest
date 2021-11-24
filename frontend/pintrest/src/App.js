import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import React from 'react';
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
import PinView from './components/History/viewpins';
import History from './components/History/History';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" exact element={<CreatePin/>} />
          <Route path="pin/:Id" element={<PinView/>}/>
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
            <Route path="/edit" element={<History/>} />
        </Routes>
    </Router>
  );
}

export default App;
