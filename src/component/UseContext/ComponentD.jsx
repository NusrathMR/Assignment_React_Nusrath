import {useContext} from "react";
import { UserContext } from "./ComponentA";
import "./component.css";

export default function ComponentA(){

    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>ComponentD</h1>
        </div>
    )
}