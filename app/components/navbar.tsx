"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/Products" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
  { name: "Sign up", href: "/sign-up" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick, cartCount = 0 } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-8 border-b border-gold bg-black">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <button
          className="lg:hidden z-50 p-2 mr-4 rounded-md text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </button>
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-gold shadow-lg transform transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <nav>
              <ul className="mt-10">
                {links.map((link, idx) => (
                  <div key={idx}>
                    <li className="my-4">
                      <Link href={link.href}>
                        <span
                          className="text-gold hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </li>
                    {idx < links.length - 1 && (
                      <hr className="border-gold" />
                    )}
                  </div>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold text-gold">
            Lasattailor
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gold"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-white transition duration-100 hover:text-gold"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center divide-x border-r border-gold sm:border-l">
          <Button
            variant="outline"
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none relative border-gold text-gold bg-inherit"
          >
            <ShoppingBagIcon />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-gold text-gold text-xs">
                {cartCount}
              </span>
            )}
            <span className="hidden text-xs font-semibold text-gold-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
