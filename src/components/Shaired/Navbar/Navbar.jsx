import { useContext } from "react";
import {Link} from 'react-router-dom';
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {
   
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className=" bg-red-500 text-white text-1xl py-3">
            {/* <h2>I am from Navbar {user && <span>{user}</span>}</h2> */}
            <div className="flex gap-3 justify-between px-16 ">
                <div className="flex gap-6"><Link to="/">Home</Link>
               
                <Link to="/about">About</Link></div>
                <div className="flex gap-6">

                {
                    user && <Link
                        className="btn btn-ghost normal-case text-xl"
                        to="/profile"
                    >Profile</Link>
                }
                {/* <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link> */}
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                    </> : <Link to="/login">Login </Link>
                }

                </div>
            </div>
        </div>
    );
};

export default Navbar;