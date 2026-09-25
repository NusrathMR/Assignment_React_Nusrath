export default function ComponentA(){
    const [name,setName] = useState("");
    
    const handleClick = ()=>{
        
    }

    const handleDelete = ()=>{

    }

    
    return(
        <div>
            Name: <input type="text" /> 
            <button type="submit" onClick={handleClick}>Add</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}