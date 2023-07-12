import { createContext, useState } from "react";
import app from "../firebase/firebase";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = useState(null);

    const CreateUser = (email,password)=>{
        return createUserWithEmailAndPassword()
    }
    return (
        <AuthContext.Provider value ={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;