import { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useStore } from "../../hooks/use-store";
import { Input } from "../Input";
import { TextArea } from "../TextArea";

export const DefaultForm: FC<FormProps> = ({
  path,
  title,
  fields: { defaultValues, inputs },
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, mode: "onChange" });

  const { updateStore } = useStore();

  function handleSuccess(data: FieldValues) {
    console.log("handle success");
  }

  function handleFailure(data: FieldValues) {
    console.error("Form Error: ", { path, title, data });
  }

  return (
    <form onSubmit={handleSubmit(handleSuccess, handleFailure)}>
      <h2>{title} Default Form</h2>
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
                onChange: (event) => {
                  updateStore(target, event.target.value);
                },
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
                onChange: (event) => {
                  updateStore(target, event.target.value);
                },
              })}
            />
          );
        }
      })}
    </form>
  );
};
