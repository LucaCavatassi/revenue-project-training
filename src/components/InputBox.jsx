import { useEffect, useState } from "react";

export default function InputBox({sendDataToParent}) {
    // const [initialInvestment, setInitialInvestment] = useState();
    // const [annualInvestment, setAnnualInvestment] = useState();
    // const [expectedReturn, setExpectedReturn] = useState();
    // const [duration, setDuration] = useState();

    const [formInputs, setFormInputs] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0 
    });

    // console.log(formInputs);

    const handleInput = (e) => {        
        const { id, value } = e.target;
        setFormInputs((prevFormInputs) => ({
            ...prevFormInputs,
            [id]: value
        }));
    };

    useEffect(() => {
        sendDataToParent(formInputs);
    }, [formInputs, sendDataToParent]);
    
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investiments</label>
                    <input type="number" placeholder="0" id="initialInvestment" value={formInputs.initialInvestment} onChange={handleInput} />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investiments</label>
                    <input type="number" placeholder="0" id="annualInvestment" value={formInputs.annualInvestment} onChange={handleInput} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input type="number" placeholder="0" id="expectedReturn" value={formInputs.expectedReturn} onChange={handleInput} />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" placeholder="0" id="duration" value={formInputs.duration} onChange={handleInput} />
                </p>
            </div>
        </div>
    )
}