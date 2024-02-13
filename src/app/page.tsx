"use client";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { CarouselApi } from "@/components/ui/carousel";
import type { MouseEvent } from "react";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

import { useCartItemsStore } from "@/store";
import { set } from "zod";

type ImageType = {
  main: string;
  thumbnail: string;
};

const images: Record<string, ImageType> = {
  "image-1": {
    main: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  "image-2": {
    main: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  "image-3": {
    main: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  "image-4": {
    main: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
};

const product = {
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
  discount: 50,
  original_price: 250.0,
};

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [itemsSelected, setItemsSelected] = useState(0);
  const setCartItems = useCartItemsStore((state) => state.setItems);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(current);
  }, [api, current]);

  const handleThumbnailClick = (
    event: MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    setCurrent(index);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-16 sm:flex-row sm:items-start sm:p-24 sm:pt-32 md:gap-32 lg:gap-52">
      <div className="h-full w-full max-w-sm sm:min-w-80 sm:max-w-3xl">
        <Carousel className="w-full max-w-lg" setApi={setApi}>
          <CarouselContent className="-ml-1">
            {Object.keys(images).map((key: string, index) => {
              const image = images[key]!;
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0.5">
                        <Image
                          key={key}
                          src={image.main}
                          width={600}
                          height={600}
                          alt={key}
                          className="rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="mt-4 flex overflow-x-auto">
          {Object.keys(images).map((key: string, index) => {
            const image = images[key]!;
            return (
              <div key={index} className="md:sm-2 inline-block pl-4">
                <Card>
                  <CardContent
                    onClick={(e) => {
                      handleThumbnailClick(e, index);
                    }}
                    className="flex aspect-square items-center justify-center p-0.5"
                  >
                    <Image
                      key={key}
                      src={image.thumbnail}
                      width={100}
                      height={100}
                      alt={key}
                      className="rounded-lg object-cover active:brightness-90 "
                    />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 self-start pl-8 sm:pt-16 lg:pt-20">
        <h4 className="font-bold text-orange">SNEAKER COMPANY</h4>
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground">{product.description}</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <p className="flex items-center gap-5">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>{" "}
            <span className="bg-pale_orange px-1 font-bold text-orange">
              {product.discount}%
            </span>
          </p>
          <span className="text-muted-foreground line-through">
            ${product.original_price.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-4">
          <div className="flex w-fit items-center gap-6 rounded-md bg-slate-100 p-1">
            <Button
              onClick={() => {
                setItemsSelected(itemsSelected - 1);
              }}
              variant="outline"
              size="icon"
              disabled={itemsSelected === 0}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span>{itemsSelected}</span>
            <Button
              onClick={() => {
                setItemsSelected(itemsSelected + 1);
              }}
              variant="outline"
              size="icon"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={() => setCartItems(itemsSelected)}
            className=" bg-orange p-6 text-center text-lg font-bold lg:w-full"
          >
            <ShoppingCart className="text-bold mr-4 h-5 w-5" /> Add to cart
          </Button>
        </div>
      </div>
    </main>
  );
}
