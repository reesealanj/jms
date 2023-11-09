"use client";

import { createContext, useContext, useState } from "react";

const GlobalSearchContext = createContext({
  value: "",
  updateSearch: (value: string) => {},
});

export function GlobalSearchProvider(props: {
  value?: string;
  children: React.ReactNode;
}) {
  const [value, setSearchValue] = useState<string>(props?.value ?? "");

  return (
    <GlobalSearchContext.Provider
      value={{ value, updateSearch: setSearchValue }}
    >
      {props.children}
    </GlobalSearchContext.Provider>
  );
}

export function useGlobalSearch() {
  const context = useContext(GlobalSearchContext);
  if (!context) {
    throw new Error(
      "useGlobalSearch failure: global search context must be used inside a GlobalSearchProvider"
    );
  }
  return context;
}
