import { useState, useEffect } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ inputData }) {
// Ensure calculatedResults is initialized as an empty array
const [calculatedResults, setCalculatedResults] = useState([]);

useEffect(() => {
    if (inputData) {
    const result = calculateInvestmentResults(inputData); // Call utility function
    // Set calculatedResults, ensuring it's an array or empty array as fallback
    setCalculatedResults(result);
    }
}, [inputData]);

// console.log(calculatedResults);


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
        {calculatedResults && calculatedResults.length > 0 ? (
            calculatedResults.map((item, index) => (
            <tr key={index}>
                <td>{item.year}</td>
                <td>{item.interest}</td>
                <td>{formatter.format(item.valueEndOfTheYear)}</td>
                <td>{formatter.format(item.annualInvestment)}</td>
            </tr>
            ))
        ) : (
            <tr>
            <td>No data available</td>
            </tr>
        )}
        </tbody>
    </table>
    </div>
);
}