import { calculateInvestmentResults } from "../util/investment.js"

export default function Results({inputData}) {

    console.log(inputData);
    

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
                    <tr>
                        <td>Year</td>
                        <td>Investment Value</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}