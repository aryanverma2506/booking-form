import React, { useState } from "react";
import styles from "./FormInput.module.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onBlur,
    onFocus,
    onInput,
    onChange,
    id,
    ...inputProps
  } = props;

  function handleBlur(event) {
    setFocused(true);
    onBlur(event);
  }

  function handleFocus(event) {
    onFocus(event);
  }

  function handleInput(event) {
    onInput(event);
  }

  function handleChange(event) {
    onChange(event);
  }

  return (
    <div className={styles["form-input"]}>
      <label>
        {label}
        {props.required && (
          <span className={styles["required"]}>
            <sup> *</sup>
          </span>
        )}
      </label>
      <input
        id={id}
        className={styles["input"]}
        {...inputProps}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        onChange={handleChange}
        focused={focused.toString()}
      />
      <span className={styles["errorMessage"]}>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
