import React, { useState } from "react";
import "./Octet.css";

const Octet = (props) => {
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(
    props.value >= 0 && props.value <= 255
  );

  const validClass = isValid ? "valid" : "invalid";
  const classes = `octet ${validClass}`;

  return (
    <div className={classes}>
      <input
        type="text"
        value={props.value}
        onChange={(e) => {
          let change = false;
          const { value } = e.target;
          if (value === "" || isNaN(value)) {
            change = false;
          } else {
            const num = Number(value);
            if (num < 0 || num > 255) {
              change = true;
              setIsValid(false);
              props.setValid(false);
              setMessage("incorrect value");
            } else {
              change = true;
              setIsValid(true);
              props.setValid(true);
            }
          }
          props.changeFunction(value, props.index, change);
        }}
      />
      <div className="error-message">{message}</div>
    </div>
  );
};

export default Octet;
