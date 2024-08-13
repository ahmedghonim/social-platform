"use client";
import React from "react";
import Logo from "@/svg/logo_2.svg";
import Story from "@/components/Story";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/ui/atoms/carousel";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import image_30 from "@/image/image_30.png";
import aqsa from "@/image/aqsa.png";
import avatar from "@/image/avatar.png";
import watch from "@/image/watch.png";
import "./css/embla.css";
import EmblaCarousel from "./EmblaCarousel";

function Page() {
  const data = [
    {
      images: [image_30, aqsa, watch],
      name: "Ahmed Ghonim",
      image: avatar,
    },
    {
      images: [image_30],
      name: "Ahmed Ghonim",
      image: avatar,
    },
    {
      images: [image_30],
      name: "Ahmed Ghonim",
      image: avatar,
    },
    {
      images: [image_30],
      name: "Ahmed Ghonim",
      image: avatar,
    },
    {
      images: [image_30],
      name: "Ahmed Ghonim",
      image: avatar,
    },
    {
      images: [image_30],
      name: "Ahmed Ghonim",
      image: avatar,
    },
    {
      images: [image_30],
      name: "Ahmed Ghonim",
      image: avatar,
    },
    {
      images: [image_30],
      name: "Ahmed Ghonim",
      image: avatar,
    },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <div className="bg-black h-screen overflow-hidden">
      <div className="ms-[87px] pt-[11px]">
        <Logo />
      </div>

      <EmblaCarousel slides={data} options={OPTIONS} />
    </div>
  );
}

export default Page;
