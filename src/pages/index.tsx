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

const About = () => {
  return (
    <div className=" mx-1 pt-1 text-sm flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="instructions">
        <h1 className="text-center text-lg border-b-2 border-black">
          How to use the App
        </h1>
        <p>Click on the test you need to perform to get started.</p>
        <p>Enter the number of positive wells in the sample.</p>
        <p>
          Now the Most Probable Number is displayed. If a confidence range
          exists, it will be shown.
        </p>
        <p>Have Fun!</p>
        <Link
          className="flex justify-center pb-2 text-blue-400"
          href="https://www.npmjs.com/package/mpn-lookup"
        >
          click here for more info
        </Link>
      </div>
    </div>
  );
};
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
      className={`${geistSans.variable} ${geistMono.variable}  grid grid-rows-[20px_1fr_20px] items-center sm:items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className=" w-48 max-w-48 min-w-48 h-[386px] bg-blue-flex flex-col gap-8 row-start-2 border-2 border-black rounded-2xl ">
        <div className="flex flex-col h-full w-full">
          {!(isAbout || isQuantitray || isLegiolert || isQuantitray2k) ? (
            <div className="pt-2 text-xl space-y-4">
              <h1 className="text-2xl text-center pb-2 border-b-2 border-black">
                MPN Lookup
              </h1>
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
          ) : (
            <div className="h-[342px]">
              {isQuantitray && (
                <LookupComponent data-testid="mcqt" testtype={"quanti"} />
              )}
              {isQuantitray2k && <LookupComponent testtype={"quanti2k"} />}
              {isLegiolert && <LookupComponent testtype={"legiolert"} />}
              {isAbout && <About />}
            </div>
          )}
          <div>
            {(isAbout || isQuantitray || isLegiolert || isQuantitray2k) && (
              <button
                id="back"
                data-testid="back-button"
                onClick={resetState}
                className={`${isAbout ? "absolute-back-button" : "absolute-back-button"}`}
              >
                {"⬅️   "} Back
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
