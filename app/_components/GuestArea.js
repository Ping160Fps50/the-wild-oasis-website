import { auth } from "@/app/_lib/auth";

import Link from "next/link";

export default async function GuestArea() {
  const session = await auth();

  return (
    <li>
      {session?.user.image ? (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex items-center gap-4"
        >
          <img
            src={session.user.image}
            className="h-8 rounded-full"
            alt={session.user.name}
            referrerPolicy="no-referrer"
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
        >
          <span>Guest area</span>
        </Link>
      )}
    </li>
  );
}
