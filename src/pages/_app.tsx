import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

// Social previews need absolute URLs, so the deployed origin is spelled out here.
const SITE_URL = "https://jonathan-gartland.github.io/mpn-lookup-nextjs/";
const TITLE = "MPN Lookup | Quanti-Tray, Quanti-Tray/2000 & Legiolert";
const DESCRIPTION =
  "Get the Most Probable Number and 95% confidence interval for IDEXX Quanti-Tray, Quanti-Tray/2000 and Legiolert tests from your positive well counts.";

export default function App({ Component, pageProps }: AppProps) {
  // Raw hrefs are not prefixed by Next.js, so add the basePath explicitly.
  const { basePath } = useRouter();
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0e5a78" />
        <link rel="canonical" href={SITE_URL} />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${basePath}/favicon.svg`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MPN Lookup" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="MPN Lookup app showing an MPN of 11.1 with a 95% confidence interval of 6.1 to 20.5"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}og-image.png`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
