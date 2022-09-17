import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: any;
  type?: HTMLInputElement["type"];
}

export const Input: FC<InputProps> = ({
  name,
  label,
  register,
  type = "text",
  error,
}) => {
  return (
    <>
      <label htmlFor={name}>
        <div>{label}</div>
        <input {...register} type={type} />
      </label>
      {error && (
        <p style={{ color: "red" }}>
          * {label} {error.type}.
        </p>
      )}
    </>
  );
};
