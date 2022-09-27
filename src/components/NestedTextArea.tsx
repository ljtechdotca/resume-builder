import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { useStore } from "../hooks/use-store";

export const NestedTextArea: FC<InputProps> = ({
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
      <textarea
        id={name}
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
