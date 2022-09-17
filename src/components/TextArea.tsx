import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: any;
}

export const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  register,
  error,
}) => {
  return (
    <>
      <label htmlFor={name}>
        <div>{label}</div>
        <textarea {...register} />
      </label>
      {error && <p style={{ color: "red" }}>* {label} {error.type}.</p>}
    </>
  );
};
