import {useState} from "react"
import Digits from "./Digits"

/* 
TODO: 
1. How to scale display numbers so that they wont go outside the display? (flex?) 
2. How to prevent user from entering numbers starting with 0?
3. How to prevent user from entering multible decimal points to one value (term?):
    - Tomi's fix': 
            else if (nappain === "." && laskukentta.includes (".")) {
            return
            }
    - This, however, prevents user from calculating with multiple decimal numbers
 */



function App() {
    let digits = ["1","2","3","4","5","6","7","8","9","0","."];
    const ops = ["+","-","*","/","."];
    
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
                    <button onClick={() => pushedButton("*")}>x</button>
                    <button onClick={() => pushedButton("/")}>÷</button>
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
