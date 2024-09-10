import React from "react";
import Link from "next/link";

const GlobalNavbar = () => {
  const links = [
    { href: "/about", label: "counter" },
    { href: "/drinks", label: "drinks" },
    { href: "/tasks", label: "tasks" },
    { href: "/client", label: "client" },
    { href: "/prisma-example", label: "prisma" },
  ];
  return (
    <div className="navbar bg-navbarbg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-lg">
                {link.label} page
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GlobalNavbar;
