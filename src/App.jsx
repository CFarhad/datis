import "./assets/fontiran.css";
import {
  Button,
  MantineProvider,
  createTheme,
  DirectionProvider,
  useDirection,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Theme } from "./libs/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import "./global.css";
import "@mantine/dropzone/styles.css";
import "./i18n";
import { useEffect, useLayoutEffect } from "react";
import { DirectionDetector } from "./libs";
import mockServer from "./mock";
import appConfig from "@/configs/app.config.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClientConfig } from "./libs/api";


const queryClient = new QueryClient(queryClientConfig);

let environment = import.meta.env.MODE;

const theme = createTheme(Theme);
const browserRoutes = createBrowserRouter(routes);

if (environment !== "production" && appConfig.enableMock) {
  // mockServer({ environment });
}

function App() {
  useLayoutEffect(() => {
    DirectionDetector();
  }, []);

  return (
    <>
      <DirectionProvider initialDirection="ltr" detectDirection={true}>
        <MantineProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
            <DirectionDetector />
            <Notifications limit={5} />
            <RouterProvider router={browserRoutes} />
          </QueryClientProvider>
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}

export default App;
