import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { useStore } from "../../hooks/use-store";

export const NestedInput: FC<any> = ({ name, type, placeholder }) => {
  const { recordTouch, updateData } = useStore();
  const { getValues, register } = useFormContext();

  return (
    <label htmlFor={name}>
      <div>{name}</div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          onChange: (event) => {
            recordTouch(name);
            updateData(getValues());
          },
        })}
      />
    </label>
  );
};
