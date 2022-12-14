import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { useStore } from "../hooks/use-store";

export const NestedInput: FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
}) => {
  const { updateData } = useStore();
  const { getValues, register } = useFormContext();

  return (
    <label htmlFor={name}>
      <div>{label}</div>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          onChange: (event) => {
            updateData(getValues());
          },
        })}
      />
    </label>
  );
};
