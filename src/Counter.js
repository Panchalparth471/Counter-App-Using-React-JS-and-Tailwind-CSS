import { useState } from "react";
import "./Counter.css"
import Button from "./Button.js";


function Counter() {
    
    //useState Initializes a variable to zero and we update using function setVal
    const [val, setVal] = useState(0);

   //When + is clicked following function will be called which will increase val to 1
    function clickAdd() {
        setVal(val + 1);
    }

    //When - is clicked following function will be called which will decrease val to 1
    function clickMinus() {
        setVal(val - 1);
    }

    function reset() {
        setVal(0);
    }


    return (
<>
        <div class="flex justify-between w-[15%] h-[6%] font-semibold text-xl items-center px-1 mb-4 bg-white">
            <div class="flex cursor-pointer" onClick={clickAdd} >+</div>

        

            <div class="flex" value={val}>{val}</div>
            <div class="flex cursor-pointer" onClick={clickMinus}>-</div>
            </div>
{/* 
             Passing reset function to the Button component using props */}
            <Button onReset={reset}></Button>
      </>

    );
}

export default Counter;