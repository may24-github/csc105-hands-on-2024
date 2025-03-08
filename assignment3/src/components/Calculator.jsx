import { useState } from "react";
import './Calculator.css'; // Import the CSS file

function Calculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState(0);

    const addValue = (operand) => {
        setResult(result + operand);
    }

    const subtractValue = (operand) => {
        setResult(result - operand);
    }

    const multipleValue = (operand) => {
        setResult(result * operand);
    } 

    const divideValue = (operand) => {
        setResult(result / operand);
    }

    const resetInput = () => {
        setInput(0);
    }

    const resetValue = () => {
        setResult(0);
    }

    return (
        <div className="calculator">
            <h1 className="calculator-title">Simple Calculator</h1>
            <span className="calculator-result">Result: {result}</span>
            <br/>
            <input
                id="input"
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
                className="calculator-input"
            />
            <div className="calculator-buttons">
                <button onClick={() => addValue(input)} className="calculator-button">Add</button>
                <button onClick={() => subtractValue(input)} className="calculator-button">Subtract</button>
                <button onClick={() => multipleValue(input)} className="calculator-button">Multiply</button>
                <button onClick={() => divideValue(input)} className="calculator-button">Divide</button>
                <button onClick={() => resetInput(input)} className="calculator-button">Reset Input</button>
                <button onClick={() => resetValue(input)} className="calculator-button reset-btn">Reset Result</button>
            </div>
        </div>
    )
}

export default Calculator;