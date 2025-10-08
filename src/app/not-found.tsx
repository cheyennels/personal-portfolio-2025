import Button from './components/Button'

export default function NotFound() {
  return (
    <div className="whole-page-wrapper">
      <div className="page-container w-full h-full grid place-content-center p-8">
        <div className="page-wrapper text-center">
          <h1 className="text-hero text-grey-900">404 - Page Not Found</h1>
          <p className="text-large text-grey-700 mb-8 mt-4">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button href="/">Go back home</Button>
        </div>
      </div>
    </div>
  )
}
