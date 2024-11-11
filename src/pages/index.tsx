import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col space-y-1.5">
          <h1>MPN Lookup</h1>
          <Link style={{ borderStyle: 'solid', borderWidth: 1 }} href="/quantitray">
            <button>QuantiTray&reg;</button>
          </Link>
          <Link style={{ borderStyle: 'solid', borderWidth: 1 }} href="/quantitray2k">
            <button>QuantiTray2000&reg;</button>
          </Link>
          <Link style={{ borderStyle: 'solid', borderWidth: 1 }} href="/legiolert">
            <button style={{ textAlign: 'center'}}>Legiolert</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
