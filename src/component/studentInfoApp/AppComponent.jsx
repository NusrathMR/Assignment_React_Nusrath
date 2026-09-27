import { useState,createContext } from "react";
import StudentComponent from "./StudentComponent";

export const NameContext = createContext();
export const CourseContext = createContext();
export const BatchContext = createContext();

export default function AppComponent(){
    
    const [name,setName] = useState("");
    const [course,SetCourse] = useState("");
    const [batch,setBatch] = useState("");

    const addDetails = (event)=>{
        console.log([name, course, batch]);
        event.preventDefault();
        
    }
    return(
        <form>
            Student Name: <input type="text" onChange={(event)=>setName(event.target.value)}/>
            <p>
                Course: <input type="text" onChange={(event)=>SetCourse(event.target.value)}/>
            </p>
            Batch: <input type="text" onChange={(event)=>setBatch(event.target.value)}/>

            <p>
                <button onClick={addDetails}>ADD Details...</button>
            </p>


            <b>Name: {name} <br />
            Course: {course} <br />
            Batch: {batch}</b>
            
            <p>
                <NameContext.Provider value={name}>
                    <StudentComponent name={name}></StudentComponent>
                </NameContext.Provider>
            </p>
        </form>
    )
}