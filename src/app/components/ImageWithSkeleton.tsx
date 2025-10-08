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

  return (
    <div className={`relative ${className}`} onClick={onClick}>
      {/* Skeleton loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
      )}
      
      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${fill ? 'object-cover' : ''}`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
      />
    </div>
  )
}

