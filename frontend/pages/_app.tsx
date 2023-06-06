import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ROUTES } from "../constants/routes";
import { toast, ToastContainer } from "react-toastify";
import { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/globals.css";

// 1. Checks if token is available or not.
// 2. If no token; log out!
const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  let token: string | null = null;

  // Reference: https://github.com/vercel/next.js/discussions/19911#discussioncomment-1425895
  if (typeof window !== "undefined") {
    token = localStorage.getItem("auth_token");
  }

  // List of pages that do not require auth-token
  const isNoAuthPage =
    ROUTES.login.includes(router.pathname) ||
    ROUTES.register.includes(router.pathname) ||
    ROUTES.verify.includes(router.pathname);

  // Checks the current page and then checks the token!
  useEffect(() => {
    // no auth required
    if (isNoAuthPage) {
      if (token) {
        localStorage.setItem("auth_token", "");
      }
    }
    // auth required
    else {
      if (!token) {
        // redirect back to login
        // TODO: toast message
        router.push(ROUTES.login);
      }
    }
  }, [isNoAuthPage, token, router]);

  if (token || isNoAuthPage) {
    return <>{children}</>;
  }

  // Show some message
  return <center>Redirecting... Sit tight!</center>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer position="top-right" theme="light" />
      <QueryClientProvider client={new QueryClient({})}>
        <AuthWrapper>
          <Component {...pageProps} />
        </AuthWrapper>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
