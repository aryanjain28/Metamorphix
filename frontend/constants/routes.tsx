export const API_ROUTES = {};

export const ROUTES = {
  login: "/app/login",
  register: "/app/register",
  verify: "/app/verify",
  dashboard: "app/dashboard",
};

// List of routes that require no-authorization
export const noAuthRoutes = [ROUTES.login, ROUTES.register, ROUTES.verify];
