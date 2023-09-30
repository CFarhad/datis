import { Loader } from "@mantine/core";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Auth;
