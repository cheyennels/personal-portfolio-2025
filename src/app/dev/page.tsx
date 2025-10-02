import { Suspense } from 'react'
import GitHubContributions from '../components/GitHubContributions'
import GitHubStats from '../components/GitHubStats'
import { SkeletonCard } from '../components/Skeleton'

import type { Metadata } from 'next'
import { devMetadata } from '../metadata'

export const metadata: Metadata = devMetadata

export default function Dev() {
  return (
    <div className="items-center justify-items-center p-8 gap-16">
      <main className="flex flex-col">
        <Suspense fallback={<SkeletonCard />}>
          <GitHubContributions />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <GitHubStats />
        </Suspense>
      </main>
    </div>
  )
}
