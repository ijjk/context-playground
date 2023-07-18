import Link from "next/link";
import { ServerData } from "./components/context";
import { ClientButton } from "./components/client/client-button";
import { addWrapper } from "./components/server/server-hoc-wrapper";
import { ServerNestedContext } from "./components/server/server-nested-context";
import { ClientNestedContext } from "./components/client/client-nested-context";
import { ClientDataProvider } from "./components/client/client-context";

const WrappedButton = addWrapper(ClientButton);

export default function Page() {
  return (
    <>
      <p>Current page: index page</p>

      <Link href="/blog/first">to /blog/first</Link>
      <br />
      
      <ClientDataProvider value='index-page'>
        <ServerData.Provider value="initial-first">
          <WrappedButton />
        </ServerData.Provider>
        <ServerData.Provider value="initial-second">
          <ClientButton />
        </ServerData.Provider>
        
        <ClientNestedContext>
          <ClientButton />
        </ClientNestedContext>

        <ServerNestedContext>
          <ClientButton />
        </ServerNestedContext>
      </ClientDataProvider>
    </>
  );
}
