import { useState } from "react";

export default function UseState(){

    const [name,setName] = useState("");

    const addName = ()=>{
        console.log({name});
    }

    const deleteName = ()=>{
        setName("");
    }
    return(
        <div>
            <form onSubmit={(event)=>(event.preventDefault())}>
                Name: <input type="text" onChange={(event)=>setName(event.target.value)}/>
                <p><button onClick={addName}>Add</button>
                <button onClick={deleteName}>Delete</button></p>

                <h2>{name}</h2>

            </form>
        </div>
    )
}