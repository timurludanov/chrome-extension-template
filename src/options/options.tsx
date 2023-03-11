import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import OptionsApp from "./OptionsApp";

const container = document.createElement("div");
const body = document.querySelector("body");
body?.appendChild(container);

const queryClient = new QueryClient();

const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <OptionsApp />
  </QueryClientProvider>
);
