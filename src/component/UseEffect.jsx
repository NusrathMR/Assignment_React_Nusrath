import {useState, useEffect} from "react";

export default function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`;
    },[count,color]);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(new Date());
    //     }, 1000);

    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(timer);
        }
    },[]);


    const changeColor = ()=>{
        setColor("green");
    }

    const addCount = ()=>{
        setCount(count+1);
    }

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = ()=>{
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");
    },[])

    
    return(
        <div> 
            <b style={{color:color}}>Count: {count} </b>
            <button onClick={addCount}>Add</button>
            <button onClick={changeColor}>Change Color</button>

            <p>
                <b>Windows Height is {height}</b> <br />
                <b>Windows Width is {width}</b>
            </p>

            <p>
                {time.toLocaleTimeString()}
            </p>
        </div>

        
    )
}  