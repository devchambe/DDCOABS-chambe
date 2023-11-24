import Provider from "@/context/provider";
import { Inter } from "next/font/google";
import NavbarClient from "../NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FAQ and Help",
  description: "FAQ and Help",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarClient/>

        {/* <Provider> */}
          <main>{children}</main>
        {/* </Provider> */}
      </body>
    </html>
  );
}
