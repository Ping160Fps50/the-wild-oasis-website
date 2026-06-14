import Header from "./_components/Header";

import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "@/app/_components/ReservationContext";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-josefin",
  // weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome To The Wild Oasis",
  },
  description:
    "Experience the ultimate luxury in nature at The Wild Oasis. Our cabins are designed to provide a unique and unforgettable escape from the hustle and bustle of everyday life. With stunning views of the surrounding wilderness, you'll feel like you're in a world of your own.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
