"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about-c3-church-global" },
  { label: "Regions", href: "/region-c3-americas" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Training", href: "/training" },
  { label: "Giving", href: "/giving" },
  { label: "New to Faith", href: "/new-to-faith" },
  { label: "Find a Church", href: "/find-a-church" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <a
        href="http://eepurl.com/gfxgrr"
        className="flex h-[49px] items-center justify-center bg-black px-4 text-center text-[8px] font-semibold uppercase tracking-[2px] text-white sm:text-[10px] sm:tracking-[3px]"
      >
        <span className="whitespace-nowrap">
          Subscribe to the C3 Church Global Newsletter
        </span>
        <span className="ml-3 shrink-0 text-[15px]" aria-hidden="true">
          👏
        </span>
      </a>

      <div className="flex h-16 items-center justify-between bg-white px-0 pr-2 sm:px-5 lg:h-[98px] lg:px-[7.5%]">
        <Link
          href="/"
          className="relative h-16 w-[200px] shrink-0 lg:w-[320px]"
          aria-label="C3 Church Global home"
        >
          <Image
            src="/logo.png"
            alt="C3 Church Global"
            fill
            sizes="(min-width: 1024px) 320px, 200px"
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-[30px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-normal uppercase tracking-[2.1px] text-black transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-7 bg-black" />
          <span className="block h-0.5 w-7 bg-black" />
          <span className="block h-0.5 w-7 bg-black" />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col bg-[#b6bcb2] px-10 py-5 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-sm uppercase tracking-[1.54px] text-black"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
