"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

interface MenuItemProps {
  title: string;
  url: string;
}

// TO DO
// SET ROUTES PROPERLY

const menuItems: MenuItemProps[] = [
  { title: "Home", url: "/" },
  { title: "Portfolio", url: "/PORTFOLIO" },
  { title: "About", url: "/ABOUT" },
  { title: "Contact", url: "/CONTACT" },
];

interface MenuListProps {
  onItemClick?: () => void;
}

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>(({ onItemClick }, ref) => {
  const pathname = usePathname();

  const isLinkActive = (url: string) => pathname === url || pathname.startsWith(url + "/");

  return (
    <ul ref={ref} className="menu-list">
      {menuItems.map((item) => (
        <li key={item.title} className={`menu-list-item ${isLinkActive(item.url) ? "active" : ""}`}>
          <Link href={item.url} onClick={onItemClick} className="menu-list-item-text text-[28px] leading-[70px] text-white md:text-[42px] xl:text-[56px] xl:leading-[90px]">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
});

MenuList.displayName = "MenuList";
