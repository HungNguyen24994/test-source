import useAuth from "@/hooks/auth";
import { InputRule } from "@/utils/constants/common-const";
import { RegisterInput } from "@/utils/types";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { Button, ButtonType } from "ui";
import BasicInput from "ui/Input";

const LoginPage = () => {
  const { newbieRegister } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [username, setUserName] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const route = useRouter();

  const onSubmitRegister = useCallback(async () => {
    if (!name || !username) return;
    setLoading(true);

    try {
      const input: RegisterInput = {
        name,
        username,
      };
      const result = await newbieRegister(input);
      const { data, errors } = result;
      if (data?.register && !errors) {
        setLoading(false);
        route.push("/");
      }
    } catch (error: any) {
      setLoading(false);
    }
  }, [name, username]);

  // prevent submit when enter
  const checkKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) e.preventDefault();
  };

  return (
    <div className="m-auto w-98vw md:w-3/4">
      <form
        className="form"
        onSubmit={handleSubmit(onSubmitRegister)}
        onKeyDown={(e: any) => checkKeyDown(e)}
      >
        <BasicInput
          setValue={setName}
          id="name"
          useLabel
          label="Name"
          register={register}
          errors={errors}
          clearErrors={clearErrors}
          rules={{
            required: true,
            maxLength: InputRule.maxLength,
          }}
          placeholder="Enter Name"
        />
        <BasicInput
          setValue={setUserName}
          id="username"
          useLabel
          label="User Name"
          register={register}
          errors={errors}
          clearErrors={clearErrors}
          rules={{
            required: true,
            maxLength: InputRule.maxLength,
          }}
          placeholder="Enter User Name"
        />
        <Button
          type={ButtonType.SUBMIT}
          className="h-10 px-8 mt-4 bg-blue-600 w-fit"
          loading={loading}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
