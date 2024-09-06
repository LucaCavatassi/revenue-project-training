import { useState, useEffect } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ inputData }) {
// Ensure calculatedResults is initialized as an empty array
const [calculatedResults, setCalculatedResults] = useState([]);
const [initialInvestment, setInitialInvestment] = useState(0)

useEffect(() => {
    if (inputData) {
    const result = calculateInvestmentResults(inputData); 
    const initialInv = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
    
    setInitialInvestment(initialInv)
    setCalculatedResults(result);
    }
}, [inputData]);




return (
    <div>
    <table id="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {calculatedResults.map((item) => {

            const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
            const totalAmountInveste = item.valueEndOfYear - totalInterest

            return (
                <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInveste)}</td>
                </tr>
            )
        })}
                
        </tbody>
    </table>
    </div>
);
}