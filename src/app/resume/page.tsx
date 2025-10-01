export default function Resume() {
  return (
    <div className="items-center justify-items-center p-8 gap-16">
      <main className="flex flex-col items-center">
        <div className=" p-2 footer-date">
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
      </main>
    </div>
  )
}
