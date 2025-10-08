'use client'

import Button from './components/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="whole-page-wrapper">
      <div className="page-container w-full h-full grid place-content-center p-8">
        <div className="page-wrapper text-center">
          <h1 className="text-hero text-grey-900">Something went wrong!</h1>
          <p className="text-large text-grey-700 mb-8 mt-4">
            {error.message || 'An unexpected error occurred.'}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="button-link button-primary"
            >
              Try again
            </button>
            <Button href="/">Go back home</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
