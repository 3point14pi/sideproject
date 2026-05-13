import Link from 'next/link'

export default function MogscorePage() {
  return (
    <div className="min-h-screen bg-[#060708] text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-10 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">MogScore</p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">Abs &amp; Face Score Experience</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A polished capture and scoring flow for face and physique analysis. Start the scan, review the breakdown, and share your score with confidence.
          </p>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
          <p className="text-slate-300">This page represents the MogScore section of the unified website. Add the full capture flow here later or link to the existing MogScore app.</p>

          <ul className="space-y-3 text-slate-200">
            <li>• Face and physique scan workflow</li>
            <li>• Moving screens with scoring analysis</li>
            <li>• Submission-ready results and sharing</li>
          </ul>

          <Link href="/" className="inline-flex rounded-full bg-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-300">
            Back to hub
          </Link>
        </div>
      </div>
    </div>
  )
}
