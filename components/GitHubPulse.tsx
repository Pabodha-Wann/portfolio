"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { ExternalLink } from "lucide-react"

const GITHUB_USERNAME = "Pabodha-Wann"

type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ContributionData = {
  contributions: Contribution[]
  total: Record<string, number>
}

type GitHubUser = {
  followers: number
  public_repos: number
}

// Level → Tailwind bg class (purple palette to match portfolio)
const levelColors: Record<number, string> = {
  0: "bg-slate-100 dark:bg-slate-800",
  1: "bg-purple-200 dark:bg-purple-900",
  2: "bg-purple-400 dark:bg-purple-700",
  3: "bg-purple-600 dark:bg-purple-500",
  4: "bg-purple-800 dark:bg-purple-300",
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""]

// Group flat contributions into 52 columns of 7 days each
function buildWeeks(contributions: Contribution[]): Contribution[][] {
  const weeks: Contribution[][] = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }
  return weeks
}

// Get month labels with their starting column index
function getMonthLabels(weeks: Contribution[][]): { label: string; col: number }[] {
  const seen = new Set<string>()
  const labels: { label: string; col: number }[] = []
  weeks.forEach((week, col) => {
    if (week[0]) {
      const month = new Date(week[0].date).getMonth()
      const key = `${new Date(week[0].date).getFullYear()}-${month}`
      if (!seen.has(key)) {
        seen.add(key)
        labels.push({ label: MONTHS[month], col })
      }
    }
  })
  return labels
}

export default function GitHubPulse() {
  const [data, setData] = useState<ContributionData | null>(null)
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchAll() {
      try {
        const [contribRes, userRes] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        ])
        if (!contribRes.ok || !userRes.ok) throw new Error("fetch failed")
        const contribJson: ContributionData = await contribRes.json()
        const userJson: GitHubUser = await userRes.json()
        setData(contribJson)
        setUser(userJson)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchAll()
  }, [])

  const totalCommits = data
    ? Object.values(data.total).reduce((a, b) => a + b, 0)
    : 0

  const weeks = data ? buildWeeks(data.contributions) : []
  const monthLabels = weeks.length ? getMonthLabels(weeks) : []

  return (
    <section className="w-full border-b border-slate-400/50 px-6 py-20 dark:border-slate-600/50 md:px-12">

      {/* ── Section label ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="mb-10 flex items-center gap-2"
      >
        <div className="h-px w-8 bg-purple-600" />
        <span className="font-mono text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase">
          GitHub Pulse
        </span>
      </motion.div>

      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <h2 className="font-sans text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Code<span className="text-slate-300 dark:text-slate-600"> Activity.</span>
        </h2>

        {/* Stats */}
        <div className="flex items-center gap-8">
          {[
            { label: "Followers", value: user?.followers ?? "—" },
            { label: "Commits", value: totalCommits || "—" },
            { label: "Repos", value: user?.public_repos ?? "—" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                {s.label}
              </span>
              <span className="font-sans text-2xl font-extrabold text-slate-900 dark:text-white">
                {loading ? (
                  <span className="inline-block h-7 w-10 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                ) : s.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Heatmap ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="border border-slate-200/60 bg-white/50 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-transparent"
      >
        {loading && (
          <div className="flex h-36 items-center justify-center">
            <span className="font-mono text-sm text-slate-400 animate-pulse">Loading contributions…</span>
          </div>
        )}

        {error && (
          <div className="flex h-36 items-center justify-center">
            <span className="font-mono text-sm text-slate-400">Could not load contribution data.</span>
          </div>
        )}

        {!loading && !error && data && (
          <div className="overflow-x-auto">
            <div className="flex gap-3 min-w-max">

              {/* Day labels */}
              <div className="flex flex-col justify-around pt-6 pr-1">
                {DAYS.map((d, i) => (
                  <span key={i} className="font-mono text-[9px] text-slate-400 leading-none" style={{ height: 12 }}>
                    {d}
                  </span>
                ))}
              </div>

              {/* Grid */}
              <div>
                {/* Month labels */}
                <div className="relative mb-1" style={{ height: 18 }}>
                  {monthLabels.map(({ label, col }) => (
                    <span
                      key={`${label}-${col}`}
                      className="absolute font-mono text-[9px] text-slate-400"
                      style={{ left: col * 14 }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Weeks */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day, di) => (
                        <div
                          key={di}
                          title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                          className={`h-[11px] w-[11px] rounded-sm transition-transform duration-150 hover:scale-125 ${levelColors[day.level]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend + Profile link */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] text-slate-400">Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <div key={l} className={`h-[11px] w-[11px] rounded-sm ${levelColors[l]}`} />
                ))}
                <span className="font-mono text-[9px] text-slate-400">More</span>
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest text-slate-500 uppercase transition-colors hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              >
                <FaGithub size={14} />
                Profile
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        )}
      </motion.div>

    </section>
  )
}
