"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Avatar from "@/image/Ellipse.png";
import Image from "next/image";
import Frame from "@/svg/add_circle.svg";
import { useRouter } from "@/lib/navigation";
import { Carousel, CarouselContent, CarouselItem } from "@/ui/atoms/carousel";
import Autoplay from "embla-carousel-autoplay";

const UsersStory = () => {
  const data = [
    {
      name: "Ahmed Ghonim",
      numberOfStory: 0,
      myAccount: true,
    },
    {
      name: "Ahmed Ghonim",
      numberOfStory: 8,
    },
    {
      name: "Ahmed Ghonim",
      numberOfStory: 1,
    },
    {
      name: "Ahmed Ghonim",
      numberOfStory: 2,
    },
    {
      name: "Ahmed Ghonim",

      numberOfStory: 4,
      color: "primary",
    },
    {
      name: "Ahmed Ghonim",
      numberOfStory: 1,
    },
    {
      name: "Ahmed Ghonim",
      numberOfStory: 1,
      color: "primary",
    },
    {
      name: "Ahmed Ghonim",
      numberOfStory: 1,
      color: "primary",
    },
    {
      name: "Ahmed Ghonim",
      numberOfStory: 1,
      color: "primary",
    },
  ];
  return (
    <div className="flex  relative  p-[15px] w-full bg-white rounded-[20px] shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            stopOnInteraction: true,
            delay: 15000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {data.map((item: any, index) => (
            <CarouselItem key={index} className="basis-[13.3%]">
              <Users {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export const Users = ({
  numberOfStory = 0,
  name,
  myAccount,
  color = "secondary",
}: {
  numberOfStory?: number;
  name: string;
  myAccount?: boolean;
  color?: "primary" | "secondary";
}) => {
  const router = useRouter();
  return (
    <button
      className="relative flex flex-col gap-[9px] h-[88px] items-center w-[76px]"
      onClick={() => router.push("/1")}
    >
      {Boolean(numberOfStory) && (
        <div className="size-[63]">
          <StatusCircle color={color} no={numberOfStory} />
        </div>
      )}
      <div className="absolute top-[36%] -translate-x-1/2 start-[50.59%] -translate-y-1/2 size-[60px] p-1 flex items-center justify-center">
        <Image src={Avatar} alt="Avatar" className="w-full h-full" />
        {myAccount && <Frame className="absolute bottom-0 end-0 size-[18px]" />}
      </div>
      <span className="text-xs w-full overflow-hidden text-ellipsis whitespace-nowrap mt-auto">
        {name}
      </span>
    </button>
  );
};

function StatusCircle({
  no = 1,
  color = "primary",
}: {
  no?: number;
  color?: "primary" | "secondary";
}) {
  const numberOfDots = (2 * 3.14 * 48) / no;
  return (
    <svg width="63" height="63" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke={cn({
          "#5E60FF": color === "primary",
          "#808080": color === "secondary",
        })}
        stroke-width="4"
        stroke-dasharray={`${numberOfDots} ${no > 1 ? 6 : 0} `}
        stroke-dashoffset={numberOfDots}
      />
    </svg>
  );
}

export default UsersStory;
