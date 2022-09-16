import useUser from "@/hooks/user";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { Button } from "ui";
export default function HomePage() {
  const { dataUser } = useUser();
  const route = useRouter()
  const onGoToLogin = useCallback(() => {
    route.push('/login')
  },[])

  return (
    <>
      <div className="pb-10">Home Page</div>
      <div>
        {dataUser?.currentUser ? (
          <p>{dataUser?.currentUser.name || "User name"}</p>
        ) : (
          <Button onClick={onGoToLogin}>{"Go to Login page"}</Button>
        )}
      </div>
    </>
  );
}
