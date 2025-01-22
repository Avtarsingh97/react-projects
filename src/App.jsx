import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Dashboard from'./components/Dashboard'

const App = () => {

  const [users, setUsers] = useState([])
  
  return (
  
    <Router>

      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn users={users}/>}></Route>
        <Route path="/signup" element={<SignUp users={users} setUsers={setUsers}/>}></Route>
        
      
        <Route path="/dashboard" element={<Dashboard users={users}/>}></Route>
        

      </Routes>

    </Router>
    
  )
}

export default App