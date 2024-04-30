import React from 'react'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Chats from './components/chats/Chats'
import Register from './components/register/Register'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Login/> */}
      <Chats/>
      {/* <Register/> */}
    </div>
  );
}

export default App;
