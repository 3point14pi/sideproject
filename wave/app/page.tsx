'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const APPS = [
  {
    slug: 'mogscore',
    title: 'MogScore',
    description: 'Face and physique scoring with capture, analysis, and leaderboard-ready results.',
    accent: 'text-violet-300',
  },
  {
    slug: 'pinch',
    title: 'Pinch',
    description: 'Camera-powered hand-tracking arcade with modes, scoring, and leaderboards.',
    accent: 'text-sky-300',
  },
  {
    slug: 'wave',
    title: 'Wave',
    description: 'Real-time messaging with presence, reactions, quoted replies, and rich chat UX.',
    accent: 'text-orange-300',
  },
  {
    slug: 'tell',
    title: 'Tell',
    description: 'Psychological warfare chess with webcam-based panic signals and bluff mechanics.',
    accent: 'text-cyan-300',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <header className="space-y-6 text-center">
          <motion.h1
            className="text-5xl font-bold tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sideproject Hub
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-base leading-7 text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            One website, four experiences. Choose MogScore, Pinch, Tell, or Wave from the links below.
          </motion.p>
        </header>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {APPS.map((app) => (
            <Link key={app.slug} href={`/${app.slug}`} className="group rounded-lg border border-slate-700 bg-slate-950/80 p-6 transition hover:border-slate-500 hover:bg-slate-900/95">
              <h2 className={`text-2xl font-semibold ${app.accent}`}>{app.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{app.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 opacity-90 transition group-hover:translate-x-1">
                Go to {app.title}
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
