import { useState } from "react";

export default function InputBox() {
    const [initialInvestment, setInitialInvestment] = useState();
    const [annualInvestment, setAnnualInvestment] = useState();
    const [expectedReturn, setExpectedReturn] = useState();
    const [duration, setDuration] = useState();

    
    console.log("Input 1 " + initialInvestment);
    console.log("Input 2 " + annualInvestment);
    console.log("Input 3 " + expectedReturn);
    console.log("Input 4 " + duration);

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="Initial Investiment">Initial Investiments</label>
                    <input type="number" id="Initial Investiment" onChange={(e) => setInitialInvestment(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="Annual Investiment">Annual Investiments</label>
                    <input type="number" id="Annual Investiments" onChange={(e) => setAnnualInvestment(e.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="Expected Return">Expected Return</label>
                    <input type="number" id="Expected Return" onChange={(e) => setExpectedReturn(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="Duration">Duration</label>
                    <input type="number" id="Duration" onChange={(e) => setDuration(e.target.value)} />
                </p>
            </div>
        </div>
    )
}