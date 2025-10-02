import { Suspense } from 'react'
import GitHubContributions from '../components/GitHubContributions'
import GitHubStats from '../components/GitHubStats'
import { SkeletonCard } from '../components/Skeleton'

import type { Metadata } from 'next'
import { devMetadata } from '../metadata'

export const metadata: Metadata = devMetadata

export default function Dev() {
  return (
    <div className="h-full flex flex-col items-center p-8">
      <div className="max-w-[900px] w-full flex flex-col items-center gap-8">
        <Suspense fallback={<SkeletonCard />}>
          <GitHubContributions />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <GitHubStats />
        </Suspense>
      </div>
    </div>
  )
}
