import React, { useState } from "react";
import "./SubnetNumbersInput.css";

const SubnetNumbersInput = (props) => {
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(
    props.value < props.maxNumberOfSubnets
  );

  const validClass = isValid ? "valid" : "invalid";
  const classes = `subnet-numbers ${validClass}`;

  return (
    <div className={classes}>
      Number of subnets:
      <input
        type="text"
        value={props.value}
        onChange={(e) => {
          let change = false;
          const { value } = e.target;
          if (value === "") {
            change = true;
          } else if (isNaN(value)) {
            change = false;
          } else {
            const num = Number(value);
            if (num < 0 || num > props.maxNumberOfSubnets) {
              change = true;
              setIsValid(false);
              setMessage("incorrect number of subnets");
            } else {
              change = true;
              setIsValid(true);
            }
          }
          props.onChange(value, change);
        }}
      />
      <div className="error-message">{message}</div>
    </div>
  );
};

export default SubnetNumbersInput;
