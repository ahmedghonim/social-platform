import React from "react";
import Logo from "@/svg/logo_2.svg";
import { EmblaOptionsType } from "embla-carousel";
import image_30 from "@/image/image_30.png";
import aqsa from "@/image/aqsa.png";
import avatar from "@/image/avatar.png";
import watch from "@/image/watch.png";
import "./css/embla.css";
import EmblaCarousel from "./EmblaCarousel";
import { getStory } from "@/actions/story";

async function Page() {
  const images = await getStory();

  const data = [
    {
      images: [image_30, aqsa, ...images?.map((image: any) => image.url)],
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
