import React,{useState} from "react";



function HookUseState(){
    const[count, countSet] = useState(1);       //HookUseState

    const countIncrement =()=>{
        countSet(count*2)  
    }

    const sum =()=>{
        let sum = sum+count;
    }

    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={countIncrement}>Increment</button>
        </div>
    )
}

export default HookUseState