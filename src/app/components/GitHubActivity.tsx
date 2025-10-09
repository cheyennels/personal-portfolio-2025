'use client'

import { useState, useEffect, Suspense } from 'react'
import Skeleton, { SkeletonText } from './Skeleton'

interface Commit {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
  html_url: string
}

function GitHubActivityContent() {
  const [commits, setCommits] = useState<Commit[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/cheyennels/portfolio-2025/commits?per_page=5'
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCommits(data)
        } else {
          console.error('Unexpected API response:', data)
          setCommits([])
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching commits:', err)
        setCommits([])
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton height="h-6" width="w-32" />
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border-l-2 border-gray-200 pl-4 space-y-2">
              <Skeleton height="h-3" width="w-24" />
              <SkeletonText lines={2} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recent Activity</h3>
      {commits.length === 0 ? (
        <p className="text-gray-500">No recent commits found.</p>
      ) : (
        commits.map((commit) => (
          <div key={commit.sha} className="border-l-2 border-gray-200 pl-4">
            <p className="text-sm text-gray-600">
              {new Date(commit.commit.author.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-sm">{commit.commit.message}</p>
            <a
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              View commit →
            </a>
          </div>
        ))
      )}
    </div>
  )
}

export default function GitHubActivity() {
  return (
    <Suspense
      fallback={
        <div className="space-y-4">
          <Skeleton height="h-6" width="w-32" />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="border-l-2 border-gray-200 pl-4 space-y-2"
              >
                <Skeleton height="h-3" width="w-24" />
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </div>
      }
    >
      <GitHubActivityContent />
    </Suspense>
  )
}
