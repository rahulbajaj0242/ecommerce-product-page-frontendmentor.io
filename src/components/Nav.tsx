"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu, ShoppingCart, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { useCartItemsStore } from "@/store";
import { Button } from "./ui/button";

// type Props = {}

export default function Nav() {
  const cartItems = useCartItemsStore((state) => state.items);

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
          <PopoverContent className="mr-5 mt-2 w-[350px]">
            <h4>Cart</h4>
            <Separator className="my-2" />
            <div className="grid-row-2 grid space-y-2">
              {cartItems === 0 ? (
                <p className="text-center text-muted-foreground">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={"/images/image-product-1-thumbnail.jpg"}
                      width={40}
                      height={40}
                      alt="product thumbnail"
                    ></Image>
                    <div>
                      <p>Fall Limited Edition Sneakers</p>
                      <p className="text-muted-foreground">
                        $125.00 x {cartItems}{" "}
                        <span className="font-bold text-black">
                          ${(cartItems * 125.0).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <Trash2></Trash2>
                  </div>
                  <Button className="w-full bg-orange">Checkout</Button>
                </>
              )}
            </div>
          </PopoverContent>
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
