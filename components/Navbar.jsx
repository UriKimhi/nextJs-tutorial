import React from "react";
import Link from "next/link";

const GlobalNavbar = () => {
  return (
    <div className="navbar bg-navbarbg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-8">
          <li>
            <Link href="/about" className="text-2xl">
              about page
            </Link>
          </li>
          <li>
            <Link href="/drinks" className="text-2xl">
              drinks page
            </Link>
          </li>
          <li>
            <Link href="/tasks" className="text-2xl">
              tasks page
            </Link>
          </li>
          <li>
            <Link href="/client" className="text-2xl">
              client page
            </Link>
          </li>
          <li>
            <Link href="/prisma-example" className="text-2xl">
              prisma page
            </Link>
          </li>
          <li>
            <Link href="/query" className="text-2xl">
              query page
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalNavbar;
