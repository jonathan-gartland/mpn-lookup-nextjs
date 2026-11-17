import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // Raw hrefs are not prefixed by Next.js, so add the basePath explicitly.
  const { basePath } = useRouter();
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${basePath}/favicon.svg`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
