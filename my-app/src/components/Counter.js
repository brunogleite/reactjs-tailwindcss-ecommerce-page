import React , { useContext } from "react";
import { countContext } from "./Context/countContext";


function Counter(){
    const { count, setCount } = useContext(countContext)
    
    //const [counter , setCounter] = React.useState(0);

    return(
    <div className="border-2 border-rose-500 bg-slate-200 flex rounded-md">
        <button className ="p-2 text-xl border-2 border-rose-500" onClick={() => setCount(count - 1)}>-</button>
        <p className ="p-2 w-24 text-center border-2 border-rose-500">{count}</p>
        <button className ="p-2 text-xl border-2 border-rose-500" onClick={() => setCount(count + 1)}>+</button>
    </div>
    )
    
}

export default Counter