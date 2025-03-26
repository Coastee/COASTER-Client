import { router } from "@/routers/Router";
import { globalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const element = document.getElementById("root");

if (!element) {
  throw new Error("Root element not found.");
}

const root = createRoot(element);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>,
);
