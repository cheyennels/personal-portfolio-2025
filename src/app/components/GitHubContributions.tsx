'use client'

export default function GitHubContributions() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold">GitHub Activity</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=cheyennels&theme=github-compact&hide_border=true"
          alt="GitHub Activity Graph"
          className="w-full"
        />
      </div>
    </div>
  )
}
