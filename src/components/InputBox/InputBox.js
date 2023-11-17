import "./InputBox.css";

const InputBox = ({ userInput, setUserInput }) => {
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div className="input-container">
      <div className="input-row">
        <div>
          <label for="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            id="initialInvestment"
            min="1"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </div>

        <div>
          <label for="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            id="annualInvestment"
            min="1"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>

      <div className="input-row">
        <div>
          <label for="expectedReturn">Expected Return</label>
          <input
            type="number"
            required
            id="expectedReturn"
            min="1"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </div>

        <div>
          <label for="duration">Duration</label>
          <input
            type="number"
            required
            id="duration"
            min="1"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
