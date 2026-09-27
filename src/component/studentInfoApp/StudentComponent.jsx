import { useState } from "react";
import "./StudentComponent.css";
import { useContext } from "react";

import { NameContext } from "./AppComponent";
import { CourseContext } from "./AppComponent";
import { BatchContext } from "./AppComponent";

export default function StudentComponent(){

    const name = useContext(NameContext);
    const course = useContext(CourseContext);
    const batch = useContext(BatchContext);
    
    
    return(
        <div className="box">
            <h3>This is Student Component... </h3>

            Name: {name} <br />
            Course: {course} <br />
            Batch: {batch}
        </div>
    )
}