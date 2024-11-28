import Link from "next/link";
import LookupComponent from "@/components/LookupComponent";
import React from "react";

const About = () => {
  return (
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
          <p>will also display.</p>
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
  );
};
export default About;
