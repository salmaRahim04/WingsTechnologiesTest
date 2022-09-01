import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,Route, Switch,NavLink, Redirect
} from 'react-router-dom';
import Posts from './Components/Posts';
import Home from './Components/Home';
import Login from './Components/Login';
function App() {
  const [loggedIn,setloggedIn] = useState(localStorage.getItem("user"));
  const Logout= async (e) =>{
    e.preventDefault();
    localStorage.removeItem('user');
    setloggedIn(null)
  
}
  return (    
    <Router>
   <div className="header">
    <h2 className='Logo'>Logo</h2>
    <ul className='menu'> 
   <li><NavLink exact to="/" className='Link' activeClassName="active">Home</NavLink></li>
    <li>{loggedIn==null?null: <NavLink className='Link' activeClassName="active" to="/posts">Posts</NavLink>}</li>
    <li>{loggedIn==null?
    <NavLink to="/login"><button className='LogButton'>Login</button></NavLink>:
    <button className='LogButton' onClick={Logout} >Logout</button>}</li>
    </ul>
   </div>
  
    <Switch>
    <Route exact path="/">
            <Home />
         </Route>
      {
        loggedIn !== null?
        <Route exact path="/posts" >
            <Posts />
         </Route>:
         <Redirect  from="/posts" to="/login" />
      }
     
       {
        loggedIn == null?
        <Route exact path="/Login">
            <Login/>
         </Route>:
         <Redirect to="/Posts" />
       }
    </Switch>
   </Router>
  
    

  );
}

export default App;
