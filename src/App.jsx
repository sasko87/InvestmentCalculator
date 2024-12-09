import React, { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

const App = () => {
  const [userInvestment, setUserInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 500,
    expectedReturn: 2.5,
    duration: 12,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInvestment((prevUserInvestment) => {
      return {
        ...prevUserInvestment,
        //+ will force conversion from string value to number value
        [inputIdentifier]: +newValue,
      };
    });
  };

  const validInput =
    userInvestment.initialInvestment > 0 &&
    userInvestment.annualInvestment >= 0 &&
    userInvestment.duration > 0;
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <Input
            label="Initial Investment"
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
            value={userInvestment.initialInvestment}
          />
          <Input
            label="Annual Investment"
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
            value={userInvestment.annualInvestment}
          />
        </div>
        <div className="input-group">
          <Input
            label="Expected return in %"
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
            value={userInvestment.expectedReturn}
          />
          <Input
            label="Duration"
            onChange={(e) => handleChange("duration", e.target.value)}
            value={userInvestment.duration}
          />
        </div>
      </section>
      {!validInput && <p className="center">Please enter a valid numbers</p>}
      {validInput && <Result userInput={userInvestment} />}
    </>
  );
};

export default App;
