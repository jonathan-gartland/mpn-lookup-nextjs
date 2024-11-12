import MyComponent from "@/components/MyComponent";
import React from "react";

export default function Quantitray2k() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 data-testid="qt2k-header">QuantiTray2000&reg; MPN</h1>
          <MyComponent testtype={"quanti2k"} />
        </div>
      </main>
    </div>
  );
}
