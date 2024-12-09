import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Result = ({ userInput }) => {
  const resultsData = calculateInvestmentResults(userInput);
  const initialUserInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {resultsData.map((calcResult) => {
          const totalInterest =
            calcResult.valueEndOfYear -
            calcResult.annualInvestment * calcResult.year -
            initialUserInvestment;

          const totalInvestment = calcResult.valueEndOfYear - totalInterest;
          return (
            <tr key={calcResult.year}>
              <td>{calcResult.year}</td>
              <td>{formatter.format(calcResult.valueEndOfYear)}</td>
              <td>{formatter.format(calcResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
