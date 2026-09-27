import ComponentC from "./ComponentC"
import "./component.css";

export default function ComponentA(){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC></ComponentC>
        </div>
    )
}