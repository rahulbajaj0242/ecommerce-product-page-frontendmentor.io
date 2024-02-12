import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

// type Props = {}

export default function Nav() {
  return (
    <nav className="flex items-center justify-between pt-6">
      <div className="flex items-center justify-center">
        <div className="flex h-full pr-4 sm:hidden">
          <Sheet>
            <SheetTrigger>
              {" "}
              <Menu />{" "}
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetDescription>
                  {/*TODO: add side menu items */}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Image
          src={"images/logo.svg"}
          width={138}
          height={20}
          alt="Logo"
          className="mr-2 items-center justify-center md:mr-8"
        />
        <ul className="hidden items-center gap-4 sm:flex">
          <li>
            <Link href="/">Collections</Link>
          </li>
          <li>
            <Link href="/">Men</Link>
          </li>
          <li>
            <Link href="/">Women</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Popover>
          <PopoverTrigger>
            <ShoppingCart />
          </PopoverTrigger>
          <PopoverContent>{/* TODO: Add shopping cart */}</PopoverContent>
        </Popover>
        <Image
          src={"/images/image-avatar.png"}
          width={30}
          height={30}
          alt="Logo"
        />
      </div>
    </nav>
  );
}
