"use client";

import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

export function BlurImage({ src, alt, width, height, fill, className }: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${fill ? "h-full w-full" : ""} overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"}
          ${className}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        priority
        quality={90}
      />
    </div>
  );
}