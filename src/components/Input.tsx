import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useStore } from "../hooks/use-store";

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
        <input
          {...register}
          type={type}
        />
      </label>
      {error && (
        <p className="error">
          * {label} {error.type}.
        </p>
      )}
    </>
  );
};
