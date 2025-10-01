import { Suspense } from 'react'
import GitHubContributions from '../components/GitHubContributions'
import GitHubStats from '../components/GitHubStats'
import { SkeletonCard } from '../components/Skeleton'

export default function Dev() {
  return (
    <div className="items-center justify-items-center p-8 gap-16">
      <main className="flex flex-col">
        <h1 className="text-large pb-10">
          Dev Work - Still under construction
        </h1>
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
