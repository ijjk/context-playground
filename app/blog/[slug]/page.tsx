import Link from "next/link";
import { ServerData } from "../../components/context";
import { ClientButton } from "../../components/client/client-button";
import { addWrapper } from "../../components/server/server-hoc-wrapper";
import { ServerNestedContext } from "../../components/server/server-nested-context";
import { ClientNestedContext } from "@/app/components/client/client-nested-context";
import { ClientDataProvider } from "@/app/components/client/client-context";

const WrappedButton = addWrapper(ClientButton);

export default function Page({ params }: { params: { slug: string } }) {
  const nextHref = params.slug === 'first' ? '/blog/second'  : '/blog/first'
  
  return (
    <>
      <p>Current page: /blog/[slug] {params.slug}</p>

      <Link href="/">to /</Link>
      <br />

      <Link href={nextHref}>to {nextHref}</Link>
      <br />
      
      <ClientDataProvider value='blog-page'>
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
