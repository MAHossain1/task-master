"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <nav className="flex space-x-6 border-b px-5 h-14 mb-5 items-center text-2xl">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(link => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {status === "authenticated" && (
        <Link href="/api/auth/signout">Log out</Link>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Log in</Link>
      )}
    </nav>
  );
};

export default NavBar;
