import { useEffect, useRef, useState } from "react";

export default function UseRef(){

    const inputRef = useRef(null);

    console.log(inputRef);

    useEffect(()=>{
        console.log("Component rendered...")
    })

    const handleClick = ()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"
    }

    const clearFocus = ()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = ""
    }


    return(
        <div>
            <input type="text" ref={inputRef} /> <p>
            <button onClick={handleClick}>Focus Button</button>
            <button onClick={clearFocus}>Clear Focus</button></p>
        </div>
    )
}   