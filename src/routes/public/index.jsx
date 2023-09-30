import { lazy } from "react";
import Dashboard from "../../layouts/dashboard";
import { Anchor } from "@mantine/core";
const Settings = lazy(() => import("../../views/settings"));
const Define_Accomodation = lazy(() => import("@/views/settings/Define_Accomodation"))

export const PublicRoutes = [
  {
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <>fsd</>,
        title:"menu.front_office",
        breadcrumb: "xxx",
        icon: <svg style={{fill:"interit",stroke:"inherit"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16.7302 2C17.3802 2 17.9602 2.02003 18.4802 2.09003C21.2502 2.40003 22.0002 3.70001 22.0002 7.26001V13.58C22.0002 17.14 21.2502 18.44 18.4802 18.75C17.9602 18.82 17.3902 18.84 16.7302 18.84H7.26022C6.61022 18.84 6.03022 18.82 5.51022 18.75C2.74022 18.44 1.99023 17.14 1.99023 13.58V7.26001C1.99023 3.70001 2.74022 2.40003 5.51022 2.09003C6.03022 2.02003 6.61022 2 7.26022 2H16.7302Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5801 8.32031H17.2601" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.74023 14.1099H6.76022H17.2702" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 22H17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.1947 8.2998H7.20368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.4945 8.2998H10.5035" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      },
      {
        title: "menu.settings",
        icon: <svg style={{fill:"interit",stroke:"inherit"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="transparent">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799V11.1199Z" stroke="inhgerit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
        children: [
          {
            title: "menu.define_accomodation",
            path: "/settings/define_accomodation/",
            element: <Define_Accomodation />,
          },
        ],
      },
    ],
  },
];
