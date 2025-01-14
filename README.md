[![Cypress Tests](https://github.com/jonathan-gartland/mpn-lookup-nextjs/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/jonathan-gartland/mpn-lookup-nextjs/actions/workflows/cypress-tests.yml)  

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a test project to learn and practice Next.js and Tailwind CSS. 
It is a component that uses the [Mpn Lookup npm library](https://www.npmjs.com/package/mpn-lookup) which is simply a javascript object that contains the information in the PDF files located [here](https://www.idexx.com/files/qt97mpntable.pdf), [here](https://www.idexx.com/files/51-well-quanti-tray-mpn-table-h-en.pdf), and [here](https://www.idexx.com/files/quanti-tray-legiolert-mpn-table.pdf).  
  
Once the server is running, (or go to the [deployed site](https://mpn-lookup-nextjs-u4lg.vercel.app)) you can enter a number of positive wells and the component will return the most probable number.  
That's it.
