import ErrorMessage from "../ErrorMessage";
import React, { ChangeEvent, useCallback } from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  RegisterOptions,
  UseFormClearErrors,
  UseFormRegister,
} from "react-hook-form";

interface IInputProps {
  id: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<DeepRequired<FieldValues>>;
  clearErrors?: UseFormClearErrors<FieldValues>;
  label?: string;
  useLabel?: boolean;
  rules?: RegisterOptions;
  placeholder?: string;
}

const BasicInput = ({
  id,
  setValue,
  register,
  errors,
  clearErrors,
  useLabel,
  label,
  rules,
  placeholder,
}: IInputProps) => {
  const onChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement | any>) => {
      const { value } = event.target;
      setValue(value);
      clearErrors?.(id);
    },
    []
  );

  return (
    <div className="mb-8">
      {useLabel && (
        <div className="text-base mb-2">
          {register && "*"} {label}
        </div>
      )}
      <input
        className="app-input"
        placeholder={placeholder}
        id={id}
        {...register?.(id, rules)}
        onChange={onChangeInput}
      ></input>
      {errors && errors[id] && <ErrorMessage id={id} errors={errors} />}
    </div>
  );
};

export default BasicInput;
