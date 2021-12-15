import React from 'react';
import '../App.css';
import Header from './Header'
import SignUp from './userLogin/SignUp';
import Dashboard from './Dashboard';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './userLogin/Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './userLogin/ForgotPassword';
import UpdateProfile from './userLogin/UpdateProfile';
import RecipeHome from './recipeComponents/RecipeHome';

function App() {
  return (
    <>
      <Header />

      <Container className='d-flex align-items-center justify-content-center'
      style={({ minHeight: "100vh" })}>

        <span className="w-100" style={({ maxWidth: '400px' })}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route 
                path='/'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
                />
                <Route 
                path='/update-profile'
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
                />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/forgot-password' element={<ForgotPassword/>} />
                <Route path='/recipes' element={<RecipeHome/>}  />
              </Routes>
            </AuthProvider>
          </Router>
        </span>
      </Container>
    </>
  );
}

export default App;