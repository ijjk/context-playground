import { ServerData } from "../context";

export function ServerNestedContext({children}: any) {
  return <ServerData.Provider value='nested-server'>
    {children}
  </ServerData.Provider>
}