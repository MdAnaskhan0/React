import React,{useState} from "react";



function HookUseState(){
    const[count, countSet] = useState(1);       //HookUseState
    const [clicks, clickSet] = useState(1);

    const countIncrement =()=>{
        countSet(count*2)  
        clickSet(clicks+1)
    }

    const countValueZero =()=>{
        countSet(count*0)
    }




    return(
        <div>
            <p>Count:{count}</p>
            <p>Click:{clicks}</p>
            <button onClick={countIncrement}>Increment</button>
            <button onClick={countValueZero}>0</button>
        </div>
    )
}

export default HookUseState