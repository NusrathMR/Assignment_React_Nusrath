import ComponentD from "./ComponentD";
import "./component.css";

export default function ComponentA(){
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD></ComponentD>
        </div>
    )
}