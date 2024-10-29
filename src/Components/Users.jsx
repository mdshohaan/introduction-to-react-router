import { useLoaderData } from "react-router-dom";
import User from "./User";
                                                  
                                                
const Users = () => {                
  const users = useLoaderData()          
  console.log(users);                     
  return (                                  
    <div>    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">       
        {
            users.map((user => <User key={user.id} user={user}></User>))   
        }                 
      </div>                             
    </div>                 
  );
};

export default Users;
