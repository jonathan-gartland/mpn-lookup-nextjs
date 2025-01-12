[![Playwright Tests](https://github.com/jonathan-gartland/mpn-lookup-nextjs/actions/workflows/playwright.yml/badge.svg?branch=development)](https://github.com/jonathan-gartland/mpn-lookup-nextjs/actions/workflows/playwright.yml) 
[![Node.js CI](https://github.com/jonathan-gartland/mpn-lookup-nextjs/actions/workflows/test.yml/badge.svg)](https://github.com/jonathan-gartland/mpn-lookup-nextjs/actions/workflows/test.yml)  

# MPN Lookup Demo  

![TS](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Intellij](https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)

## This is a test project to learn and practice Next.js and Tailwind CSS.

## It is a component that uses the [Mpn Lookup npm library](https://www.npmjs.com/package/mpn-lookup) which is simply a javascript object that contains the information in the PDF files located [here](https://www.idexx.com/files/qt97mpntable.pdf), [here](https://www.idexx.com/files/51-well-quanti-tray-mpn-table-h-en.pdf), and [here](https://www.idexx.com/files/quanti-tray-legiolert-mpn-table.pdf).

### Try it out:

#### 1. git clone https://github.com/jonathan-gartland/mpn-lookup-nextjs.git

#### 2. cd mpn-lookup-nextjs

#### 3. pnpm install

#### 4. pnpm run dev

#### the app should be running at http://localhost:3000

#### You should be seeing this view:

![home view](./public/home.jpg "Home View")

#### Once the server is running, (or go to the [github page](https://jonathan-gartland.github.io/mpn-lookup-nextjs)) you can enter a number of positive wells and the component will return the most probable number.

That's it.

#### The view including the MPN and confidence range after entering a positive well count of 51 for the QuantiTray

![QuantiTray](./public/qt.jpg "QuantiTray View")

#### You may be thinking, this is very sparse - not much more than a wireframe.

#### I agree, feel free to fork and style it up.  
  

# License

This application is released under the [MIT license](LICENSE). You can use the code for any purpose, including commercial projects.

[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
