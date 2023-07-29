import "./Button.css";

function Button(props) {
    return (
         
//Using props to reset the value of counter by reset function in the Counter.js file

        <button class="text-white bg-cyan-800 w-[5%] h-[5%]" onClick={props.onReset}>Reset</button>
    );
}

export default Button