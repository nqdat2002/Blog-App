import { createContext, useEffect, useState } from "react";
import { validateUser } from "../api";

export const AuthContext = createContext();
export const AuthContexProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    const login = async (inputs) => {
        validateUser(inputs).then((data) =>{
            console.log(data);
            setCurrentUser(data);
        })
    };

    const logout = async (inputs) => {
        // await axios.post("/auth/logout");
        localStorage.removeItem("user");
    };


    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};