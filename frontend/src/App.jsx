import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'

import api from './api'

import Header from './pages/header/Header'
import Login from './pages/login/Login'
import Chats from './pages/chats/Chats'
import Register from './pages/register/Register'

import {ProtectedRoute } from './components'
import {AuthContext, UserContext} from './contexts'


function App() {
  const [ loggedIn, setLoggedIn ] = useState(null)
  const [ user, setUser ] = useState({})

  const navigate = useNavigate();

  const registration = ({
    username,
    password,
  }) => {
    api.signup({ username, password })
      .then(res => {
        navigate('/login',{replace: true})
      })
      .catch(err => {
        const errors = Object.values(err)
        if (errors) {
          alert(errors.join(', '))
        }
        setLoggedIn(false)
      })
  }

  const authorization = ({
    username, password
  }) => {
    api.signin({
      username, password
    }).then(res => {
      if (res.auth_token) {
        localStorage.setItem('token', res.auth_token)
        api.getUserData()
          .then(res => {
            setUser(res)
            setLoggedIn(true)
          })
          .catch(err => {
            setLoggedIn(false)
            navigate('/login', {replace: true})
          })
      } else {
        setLoggedIn(false)
      }
    })
    .catch(err => {
      const errors = Object.values(err)
      if (errors) {
        alert(errors.join(', '))
      }
      setLoggedIn(false)
    })
  }

  const onLogOut = () => {
    api
      .signout()
      .then(res => {
        localStorage.removeItem('token')
        setLoggedIn(false)
      })
      .catch(err => {
        const errors = Object.values(err)
        if (errors) {
          alert(errors.join(', '))
        }
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
       api.getUserData()
        .then(res => {
          setUser(res)
          setLoggedIn(true)
        })
        .catch(err => {
          setLoggedIn(false)
          navigate('/login', {replace: true})
        })
    }
    setLoggedIn(false)
  }, [])

  // if (loggedIn === null) {
  //   return <div className={styles.loading}>Loading!!</div>
  // }

  return (
    <AuthContext.Provider value={loggedIn}>
      <UserContext.Provider value={user}>
        <div className="App">
          <Header loggedIn={loggedIn} onLogOut={onLogOut}/>
          <Routes>
            <Route
              exact
              path='/chats'
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Chats/>
                </ProtectedRoute>
              }
            />
            <Route exact path='/register' element={<Register onRegister={registration} />}/>
            <Route exact path='/login' element={<Login onLogin={authorization} />}/>
            <Route path='/' element={loggedIn ? <Navigate to='/chats' replace/> : <Navigate to='/login' replace/>} />
          </Routes>
        </div>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
