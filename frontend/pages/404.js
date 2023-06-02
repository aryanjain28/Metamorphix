import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ROUTES } from "../constants/routes";

function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // TODO: toast.error( toast.custom404Error);
    router.push(ROUTES.dashboard);
  }, [router]);

  return <>404 Page Not Found</>;
}

export default Custom404;
