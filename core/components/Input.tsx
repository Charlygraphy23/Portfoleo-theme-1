import { nanoid } from "nanoid";
import React, { useMemo } from "react";

type Props = {
  name?: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  type: string;
  placeHolder?: string;
  autoComplete?: boolean;
  iconClassName?: string;
  onChange?: (e: React.InputHTMLAttributes<InputEvent>) => void;
  value?: string;
};

const Input = ({
  label = "",
  name = "",
  className = "",
  style = {},
  type = "text",
  placeHolder = "",
  autoComplete = false,
  iconClassName = "",
  onChange,
  value = "",
}: Props) => {
  const inputId = useMemo(() => nanoid(), []);

  return (
    <div className={`input__group ${className}`} style={style}>
      <label htmlFor={inputId}>
        <span>{label}</span>

        <div className="input__container">
          <input
            name={name}
            id={inputId}
            type={type}
            placeholder={placeHolder}
            autoComplete={autoComplete ? "on" : "off"}
            onChange={onChange}
            value={value}
          />
          {iconClassName && <i className={`${iconClassName} icon`}></i>}
        </div>
      </label>
    </div>
  );
};

export default Input;
