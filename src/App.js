import {useState} from "react"
import Digits from "./Digits"

// How to scale display numbers?

let digits = ["1","2","3","4","5","6","7","8","9","0","."];
const ops = ["+","-","*","/", "."];

function App() {
    const [calc, setCalc] = useState("");
    
    const pushedButton=(value)=>{
        // Disabling user from inserting multiple operators in a row:
        if (
            ops.includes(value) && calc === "" || 
            ops.includes(value) && ops.includes(calc.slice(-1))
        ) {
            return
        }
        else if (value=="=") {
            setCalc(eval(calc))
            return
        }
        setCalc(calc + value)
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    return (    
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {calc}&nbsp;         
                    <button id="clear" onClick={() => (setCalc(""))}>Clear</button>
                </div>
                <div className="operators">
                    <button onClick={() => pushedButton("+")}>+</button>
                    <button onClick={() => pushedButton("-")}>-</button>
                    <button onClick={() => pushedButton("*")}>*</button>
                    <button onClick={() => pushedButton("/")}>/</button>
                </div>
                <div className = "digits">
                    {digits.map((digit,index)=><Digits key={index} pushedButton={pushedButton} digit={digit}/>)}
                    <button id="equal-sign" onClick={calculate}>=</button>
                </div>
            </div>
        </div>        
    );

    
}

export default App
