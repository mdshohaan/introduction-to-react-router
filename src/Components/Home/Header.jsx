import { Link } from "react-router-dom";
                                                 
               

const Header = () => {
  return (
    <div>
      <h2>navbar</h2>                                             
      <nav>
        <span>My Website</span>
        <Link to ='/'>Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/contact'>Contact</Link>
        
        
      
        
      </nav>
    </div>
  );
};

export default Header;





