import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import React from 'react';
import AccountSettings from './components/SideBar/Pages/AccountSettings'
import ProfileEdit from './components/SideBar/Pages/ProfileEdit'
import Claim from './components/SideBar/Pages/Claim'
import Permission from './components/SideBar/Pages/Permissions';
import Notification from './components/SideBar/Pages/Notification';
import Privacy from './components/SideBar/Pages/Privacy';
import Security from './components/SideBar/Pages/Security';
import Apps from './components/SideBar/Pages/Apps'

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
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
          <Route path="/edit" element={<ProfileEdit />} />
        </Routes>
    </Router>
  );
}

export default App;
