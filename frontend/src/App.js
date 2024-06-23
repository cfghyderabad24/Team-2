import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CheckIn from './components/CheckIn'
import CheckOut from './components/CheckOut';
import Login from './components/Login';
import { AuthProvider } from './components/AuthContext';
import Book from './components/Books';
import Users from './components/Users';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                  <Route path='/stud' element={<Users/>}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path='/checkIn'element={<CheckIn/>}/>
                    <Route path='/checkOut' element={<CheckOut/>}/>
                    <Route path='/books' element={<Book/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
