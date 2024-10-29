import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="bg-pink-500 text-white rounded-lg p-5 ">
      <h2 className="text-2xl m-5">Name:{name}</h2>
      <p>Email:{email}</p>
      <p className="mb-4">Phone:{phone}</p>
      <Link to={`/user/${id}`} className="bg-green-400 text-black rounded-lg px-4 py-3 text-xs ">Show Details</Link>
    </div>
  );
};

export default User;
