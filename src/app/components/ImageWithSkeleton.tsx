import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

interface ImageWithSkeletonProps {
  src: StaticImageData | string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  onClick?: () => void
  priority?: boolean
}

export default function ImageWithSkeleton({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  onClick,
  priority = false,
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  // For fill images, wrapper needs to be relative and take full space
  const wrapperClass = fill ? `relative w-full h-full ${className}` : className

  return (
    <>
      {/* Skeleton loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
      )}

      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`${wrapperClass} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${fill ? 'object-cover' : ''}`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        onClick={onClick}
      />
    </>
  )
}
