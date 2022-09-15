import { useEffect, useState } from "react";

type MessageProps = {
  id: string;
  errors: any;
};

const ErrorMessage = ({ id, errors }: MessageProps) => {
  const [message, setMessage] = useState<string>("");
  const ruleType = errors[id].type;

  const messageError = {
    required: "This field is required",
    maxLength: "Max length exceeded",
  };

  useEffect(() => {
    switch (ruleType) {
      case "required":
        setMessage(messageError.required);
        break;
      case "maxLength":
        setMessage(messageError.maxLength);
        break;
      default:
        setMessage("");
    }
  }, [ruleType]);

  return <span className="text-xs text-danger">{message}</span>;
};

export default ErrorMessage;
