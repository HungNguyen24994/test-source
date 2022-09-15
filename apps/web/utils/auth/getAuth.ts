import Cookies from "js-cookie";

export const getAuthToken = () => {
  const authToken = Cookies.get("auth-token");
  return authToken;
};
