import { lazy } from "react";
import Auth from "../../layouts/auth";
const Login = lazy(() => import("../../views/auth/login"));

export const AuthRoutes = [
  {
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];
