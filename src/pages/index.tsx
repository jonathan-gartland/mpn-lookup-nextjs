import localFont from "next/font/local";
import React, { useState } from "react";
import LookupComponent from "@/components/LookupComponent";
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
  const [isQuantitray, setIsQuantitray] = useState(false);
  const [isQuantitray2k, setIsQuantitray2k] = useState(false);
  const [isLegiolert, setIsLegiolert] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const resetState = () => {
    setIsQuantitray(false);
    setIsQuantitray2k(false);
    setIsLegiolert(false);
    setIsAbout(false);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {!(isAbout || isQuantitray || isLegiolert || isQuantitray2k) && (
          <div className="flex flex-col space-y-1.5">
            <h1>MPN Lookup</h1>
            <button
              id="quantitray"
              data-testid="qt-button"
              onClick={() => setIsQuantitray(true)}
            >
              QuantiTray&reg;
            </button>
            <button
              id="quantitray2k"
              data-testid="qt2k-button"
              onClick={() => setIsQuantitray2k(true)}
            >
              QuantiTray2000&reg;
            </button>
            <button
              id="legiolert"
              data-testid="legio-button"
              onClick={() => setIsLegiolert(true)}
            >
              Legiolert
            </button>
            <button
              id="about"
              data-testid="about-button"
              onClick={() => setIsAbout(true)}
            >
              About
            </button>
          </div>
        )}
        <div>
          {isQuantitray && (
            <div>
              <h1 data-testid="qt-header">QuantiTray&reg; MPN</h1>
              <LookupComponent data-testid="mcqt" testtype={"quanti"} />
            </div>
          )}
          {isQuantitray2k && (
            <div>
              <h1 data-testid="qt2k-header">QuantiTray2000&reg; MPN</h1>
              <LookupComponent testtype={"quanti2k"} />
            </div>
          )}
          {isLegiolert && (
            <div>
              <h1 data-testid="legio-header">Legiolert MPN</h1>
              <LookupComponent testtype={"legiolert"} />
            </div>
          )}
          {isAbout && (
            <div
              className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
            >
              <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div>
                  <h1>How to use the App:</h1>
                  <br />
                  <p>Click on the test you need</p>
                  <p>to perform to get started.</p>
                  <br />
                  <p>Enter the number of pos-</p>
                  <p>itive wells in the sample.</p>
                  <br />
                  <p>Now the Most Probable</p>
                  <p>Number is displayed. If a</p>
                  <p>confidence range exists, it</p>
                  <p>Have Fun!</p>

                  <br />
                  <Link
                    style={{ color: "lightblue" }}
                    href="https://www.npmjs.com/package/mpn-lookup"
                  >
                    click here for more info
                  </Link>
                </div>
              </main>
            </div>
          )}
          {(isAbout || isQuantitray || isLegiolert || isQuantitray2k) && (
            <div>
              <button id="back" data-testid="back-button" onClick={resetState}>
                Back to Index
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
