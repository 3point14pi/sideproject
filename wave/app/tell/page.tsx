import Link from 'next/link'

export default function TellPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-10 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">TELL</p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">Psychological Warfare Chess</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A dark, immersive chess experience where webcam heart-rate telemetry becomes a visible panic meter. Bluff your opponent and use every tell to your advantage.
          </p>
        </div>

        <div className="space-y-6 rounded-3xl border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
          <p className="text-slate-300">This page is the Tell section of the unified website. You can build this route as part of the same Next.js site and later expand it to host the full Tell experience.</p>

          <ul className="space-y-3 text-slate-200">
            <li>• Webcam-based rPPG panic meter</li>
            <li>• Google auth and Firestore-backed multiplayer</li>
            <li>• Real-time board sync and bluff mechanics</li>
          </ul>

          <Link href="/" className="inline-flex rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Back to hub
          </Link>
        </div>
      </div>
    </div>
  )
}
