import React, { useState } from 'react'
import FunctionCompo from  "./FunctionCompo";
import ClassCompo from "./ClassCompo";

function AppFunction() {
    const [count, setCount] = useState(false);
    const [data, setData] = useState(false);
          // state Variable // state function          // initial value of your state variable.
    const handleFunction = () => {
      setCount(!count);
    }
    
    const handleClass = () => {
      setData(!data);
    }
    
    return (
     <>
     <h1>Styling Using Function and Class Component</h1>
     <button onClick={handleFunction}>To see styling in Functional Component</button>
     <button onClick={handleClass}>To see styling in Functional Component</button>
      
      {/* {count && <FunctionCompo />} */}
    
      {count ? <FunctionCompo /> : null}
      {data ? <ClassCompo /> : null}
    
      
      {/* <ClassCompo /> */}
    </>
    )
}

export default AppFunction


