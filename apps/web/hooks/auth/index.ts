import { useLazyQuery, useMutation } from "@apollo/client";
import { REGISTER } from "@/services/auth";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setUser } from "@/store/authSlice";
import { RegisterInput } from "@/utils/types";

export default function useAuth() {
  const authToken = Cookies.get("auth-token");
  const dispatch = useDispatch()
  const { user } = useSelector(selectAuthState);

  const newbieRegister = async (input: RegisterInput) => {
    const { data, errors } = await callRegister({
      variables: { input: { ...input } },
    });
    if (errors) console.log("errors", errors);
    else {
      Cookies.set("auth-token", data.register?.token);
      dispatch(setUser(data.register?.user));
    }

    return { data, errors };
  };

  const [callRegister] = useMutation(REGISTER, {
    variables: { input: {} },
  });

  return {
    newbieRegister,
    authToken,
    user,
  };
}
