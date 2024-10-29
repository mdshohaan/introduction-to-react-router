import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div className="text-center p-10">
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;