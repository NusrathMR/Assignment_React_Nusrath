import {useState,createContext} from "react";
import ComponentB from "./ComponentB";
import "./component.css";


export const UserContext = createContext()

export default function ComponentA(){

    const [user,setUser] = useState("BroCode");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h3>{user}</h3>
        
            <UserContext.Provider value ={user}>
                <ComponentB user={user}></ComponentB>
            </UserContext.Provider>

           
        </div>
    )
}