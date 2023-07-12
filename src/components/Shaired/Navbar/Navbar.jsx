import { useContext } from "react";
import {Link} from 'react-router-dom';
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
    const user = useContext(AuthContext);

    return (
        <div className=" bg-red-500 text-white text-1xl py-3">
            {/* <h2>I am from Navbar {user && <span>{user}</span>}</h2> */}
            <div className="flex gap-3 justify-between px-16 ">
                <div className="flex gap-6"><Link to="/">Home</Link>
               
                <Link to="/about">About</Link></div>
                <div className="flex gap-6">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;