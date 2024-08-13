import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import ActionButtons from "./ActionButtons";
import CommentSection from "./CommentSection";
import avatar from "@/image/avatar.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";

const Story = ({
  off,
  images,
  selectedIndex,
  emblaApi,
}: {
  off?: boolean;
  images: string[];
  selectedIndex: number;

  emblaApi: EmblaCarouselType | undefined;
}) => {
  const [progress, setProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    setProgress(0);
  }, [selectedIndex]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (!off) {
      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval!);

            if (currentImage !== images.length - 1) {
              setCurrentImage(() => currentImage + 1);
              return 0;
            } else {
              if (selectedIndex < 7) {
                emblaApi?.scrollTo(selectedIndex + 1);
              } else {
                emblaApi?.scrollTo(0);
              }
              return 100;
            }
          }
          return oldProgress + 1;
        });
      }, 30);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentImage, off]);

  return (
    <div
      className={cn(
        "flex relative flex-col w-full overflow-hidden duration-200 rounded-2xl h-full"
      )}
    >
      {typeof images[currentImage][0] === "string" ? (
        <img
          width={523}
          height={930}
          loading="lazy"
          src={images[currentImage]}
          alt="Social media post content"
          className={cn("object-cover absolute inset-0 z-0 h-full w-full", {
            "filter blur-sm": off,
          })}
        />
      ) : (
        <Image
          width={523}
          height={930}
          loading="lazy"
          src={images[currentImage]}
          alt="Social media post content"
          className={cn("object-cover absolute inset-0 z-0 h-full w-full", {
            "filter blur-sm": off,
          })}
        />
      )}

      {!off ? (
        <div
          className={cn(
            "duration-200 h-full flex-col flex justify-between z-10",
            {
              hidden: off,
            }
          )}
        >
          <header className="flex flex-col px-5 pt-3.5 pb-7 w-full rounded-none max-md:max-w-full bg-gradient-to-b from-black/50 to-black/0">
            <div className="flex gap-[6px]">
              {images.map((_, index: number) => (
                <div
                  onClick={() => {
                    setCurrentImage(index);

                    setProgress(0);
                  }}
                  key={index}
                  className=" cursor-pointer relative bg-white/50 w-full h-0.5"
                >
                  <span
                    className={cn(
                      "bg-white absolute duration-75 top-1/2 -translate-y-1/2 rounded-full z-30 h-[3px]",
                      {
                        "w-full": currentImage > index,
                      }
                    )}
                    style={{
                      width: currentImage === index ? `${progress}%` : "",
                    }}
                  ></span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 justify-between mt-2.5 w-full max-md:max-w-full">
              <UserInfo
                avatar={avatar}
                username="Ahmed Ghonim"
                isVerified={true}
                postTime="2h"
              />
              <ActionButtons />
            </div>
          </header>
          <CommentSection />
        </div>
      ) : (
        <div className="flex gap-5 z-10 items-center justify-center h-full w-full">
          <UserInfo
            off={off}
            avatar={avatar}
            username="Ahmed Ghonim"
            isVerified={true}
            postTime="2h"
          />
        </div>
      )}
    </div>
  );
};

export default Story;
