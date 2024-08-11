import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: any;
  alt: string;
  className?: string;
  active?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  className = "",
  active,
}) => {
  return (
    <div className="relative w-[50px]">
      {active && (
        <span className="size-2.5 bg-[#00CD00] absolute bottom-1 end-0 rounded-full"></span>
      )}
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        className={`object-contain rounded-full aspect-square  ${className}`}
      />
    </div>
  );
};

export default Avatar;
