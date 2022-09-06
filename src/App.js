import {useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,Route, Switch,NavLink, Redirect
} from 'react-router-dom';
import UserContext  from './Context/UserContext';
import Posts from './Components/Posts';
import Home from './Components/Home';
import Login from './Components/Login';



function App() {
  const { logout,IsloggedIn } = useContext(UserContext);

 
  return (    
  
    <Router>
   <div className="header">
    <h2 className='Logo'>Logo</h2>
    <ul className='menu'> 
   <li><NavLink exact to="/" className='Link' activeClassName="active">Home</NavLink></li>
    <li>{IsloggedIn===false?null: <NavLink className='Link' activeClassName="active" to="/posts">Posts</NavLink>}</li>
    <li>{IsloggedIn===false?
    <NavLink to="/login"><button className='LogButton'>Login</button></NavLink>:
    <button className='LogButton' onClick={logout} >Logout</button>}</li>
    </ul>
   </div>
  
    <Switch>
    <Route exact path="/">
            <Home />
         </Route>
      {
        IsloggedIn===true?
        <Route exact path="/posts" >
            <Posts />
         </Route>:
         <Redirect  from="/posts" to="/login" />
      }
     
       {
        IsloggedIn!==true?
        <Route exact path="/Login">
            <Login/>
         </Route>:
         <Redirect to="/posts" />
       }
    </Switch>
   </Router>
  
   
  );
}

export default App;
