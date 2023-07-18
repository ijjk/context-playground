'use client'
import { ServerData } from "../context";

export function ClientNestedContext({children}: any) {
  return <ServerData.Provider value='nested-server'>
    {children}
  </ServerData.Provider>
}