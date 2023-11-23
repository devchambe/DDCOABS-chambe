import Provider from "@/context/provider";
import { Inter } from "next/font/google";
import NavbarClient from "../NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WELCOME DDC OABS",
  description: "Client Dashboard",
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
