"use client";

import React from "react";

export const ClientData = React.createContext<string>("default");

export function ClientDataProvider({ children, value }: any) {
  return <ClientData.Provider value={value}>{children}</ClientData.Provider>;
}
