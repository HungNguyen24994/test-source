import useUser from "@/hooks/user";
import React from "react";
import { Button } from "ui";
export default function HomePage() {
  const { dataUser } = useUser();

  return (
    <>
      <div className="pb-10">Home Page</div>
      <div>
        {dataUser?.currentUser ? (
          <p>{dataUser?.currentUser.name || "User name"}</p>
        ) : (
          <Button>{"Go to Login page"}</Button>
        )}
      </div>
    </>
  );
}
