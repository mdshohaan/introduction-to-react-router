
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {

    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <h2>Our users:{users.length}</h2>
            <p>Our fantastic</p>
            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;