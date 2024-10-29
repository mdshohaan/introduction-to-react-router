
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>this Home </h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;