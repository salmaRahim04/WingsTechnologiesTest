import UserContext from './UserContext'
const UserProvider = ({ children }) => {
    // we could alse use auth:false|| true inside user but state of auth wont's change , the best solution is to create another variable to check the authenticated users   
    let IsloggedIn =localStorage.getItem("user")?true:false

    // User is the name of the "data" that gets stored in context
    let user = {
    email:'',
    password:'',
    
 }
    // Login updates the user data with a email and password parameters
      const login = (email,password) => {
       user ={
        email,password
       }
       localStorage.setItem('user',JSON.stringify({user}))
       window.location.reload()

      };

    // Logout updates the user data to default
    const logout = () => {
      user = {
        email:'',
        password:'',
       
       }
      localStorage.removeItem('user')
      window.location.reload()
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout,IsloggedIn }}>
        {children}
      </UserContext.Provider>
    );
  }
export default UserProvider