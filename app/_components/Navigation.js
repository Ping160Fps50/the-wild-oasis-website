import { Suspense } from "react";

import Link from "next/link";
import GuestArea from "./GuestArea";
import SpinnerMini from "./SpinnerMini";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <Suspense fallback={<SpinnerMini />}>
          <GuestArea />
        </Suspense>
      </ul>
    </nav>
  );
}
