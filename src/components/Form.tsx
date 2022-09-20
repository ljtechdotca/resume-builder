import { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

function noop() {}

export const Form: FC<FormProps> = ({
  title,
  fields: { defaultValues, inputs },
  onSuccess = noop,
  onFail = noop,
  onChange = noop,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, mode: "onChange" });

  function handleSuccess(data: FieldValues) {
    onSuccess(data);
  }

  function handleFailure(data: FieldValues) {
    onFail(data);
  }

  return (
    <form onSubmit={handleSubmit(handleSuccess, handleFailure)}>
      <h2>{title} Form</h2>
      <hr />
      {inputs.map(({ label, name, target, type, minLength, maxLength }) => {
        if (type === "textarea") {
          return (
            <TextArea
              key={target}
              error={errors[name]}
              label={label}
              name={name}
              register={register(name, {
                required: true,
                minLength,
                maxLength,
                onChange: (event) => onChange(target, event.target.value),
              })}
            />
          );
        } else {
          return (
            <Input
              key={target}
              error={errors[name]}
              label={label}
              name={name}
              type={type}
              register={register(name, {
                required: true,
                minLength,
                maxLength,
                onChange: (event) => onChange(target, event.target.value),
              })}
            />
          );
        }
      })}
      <button type="submit">Submit</button>
    </form>
  );
};
