import "./Table.css";
import { calculateInvestmentResults, formatter } from "../../util/investment";

const Table = ({ userInput }) => {
  const results = calculateInvestmentResults(userInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year) </th>
            <th>Total Interest </th>
            <th>Invested Capital </th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              initialInvestment;

            const totalAmountInvested = item.valueEndOfYear - totalInterest;

            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
