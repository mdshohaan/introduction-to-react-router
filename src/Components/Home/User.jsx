import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone} = user
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;