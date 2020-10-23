import React from 'react';
import App from '../App.js';
function calculate() {

}

class Calculator extends React.Component {
    render() {
        const question = "Please complete the following questions :"
        //empty message until calculate() has been called and returned
        const message = ""; 
        return(
            <div className="calc-container">
                <h2>{question}</h2>
                <div>
                    <label for="weight">Current Weight:</label>
                    <input type="number" id="fweight" name="fweight"/>
                    <label for="target">Target Weight:</label>
                    <input type="number" id="ftarget" name="ftarget"/>
                    <div class="radiobox"> 
                        <div>
                            <input type="radio" id="gain" name="drone" value="gain" checked=""/>
                            <label for="gain">Gain</label>
                        </div>
                        <div>
                            <input type="radio" id="maintain" name="drone" value="maintain" checked=""/>
                            <label for="maintain">Maintain</label>
                        </div>
                    </div>
                    <button type="button" onclick="calculate()" class="btn btn-outline-primary btn-sm">Submit</button>
                </div>
            </div>,
            <div class="response">
                <div class="response col-md-8" id="workout-plan">
                    <h2 id="workout-head">The recommended workout plan:</h2>
                    <div class="response-box">
                        <ul>
                            <li>{message}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator; 