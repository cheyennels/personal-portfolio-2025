'use client'

export default function GitHubStats() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">GitHub Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="https://github-readme-stats.vercel.app/api?username=cheyennels&show_icons=true&theme=github_dark&hide_border=true"
          alt="GitHub Stats"
          className="w-full"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=cheyennels&layout=compact&theme=github_dark&hide_border=true"
          alt="Top Languages"
          className="w-full"
        />
      </div>
    </div>
  )
}
