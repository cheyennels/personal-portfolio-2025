interface SkeletonProps {
  className?: string
  lines?: number
  height?: string
  width?: string
}

export default function Skeleton({ 
  className = '', 
  lines = 1, 
  height = 'h-4', 
  width = 'w-full' 
}: SkeletonProps) {
  if (lines === 1) {
    return (
      <div 
        className={`animate-pulse bg-gray-200 rounded ${height} ${width} ${className}`}
      />
    )
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gray-200 rounded ${height} ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

// Specific skeleton components
export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-lg h-48 w-full mb-4"></div>
      <div className="space-y-2">
        <div className="bg-gray-200 rounded h-4 w-3/4"></div>
        <div className="bg-gray-200 rounded h-4 w-1/2"></div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return <Skeleton lines={lines} height="h-4" />
}

export function SkeletonAvatar() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-full h-12 w-12"></div>
    </div>
  )
}

export function SkeletonButton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded h-10 w-24"></div>
    </div>
  )
}
