import type { Metadata } from 'next'
import { designMetadata } from '../metadata'

export const metadata: Metadata = designMetadata

export default function Design() {
  return (
    <div className="h-full grid place-content-center p-8 gap-16">
      <div className="flex flex-col items-center gap-8">
        <div className="footer-date">
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
        <h1 className="text-large">
          This page is currently under construction
        </h1>
      </div>
    </div>
  )
}
