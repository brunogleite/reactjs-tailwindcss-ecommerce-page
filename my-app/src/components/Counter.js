import React from "react";


function Counter(){
    const [counter , setCounter] = React.useState(0);

    return(
    <div className="border-2 border-rose-500 flex">
        <button className ="p-2" onClick={() => setCounter(counter - 1)}>-</button>
        <p className ="p-2">{counter}</p>
        <button className ="p-2" onClick={() => setCounter(counter + 1)}>+</button>
    </div>
    )
    
}

export default Counter