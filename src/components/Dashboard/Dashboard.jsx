// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Dashboard = () => {
    const {user} =useContext(AuthContext);
   
        
   
    return (
        <div>
            i am from Dashboard {user.email}
        </div>
    );
};

export default Dashboard;