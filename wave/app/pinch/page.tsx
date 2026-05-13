import Link from 'next/link'

export const metadata = {
  title: 'Pinch | Sideproject Hub',
  description: 'Hand-tracking arcade game hosted inside the unified Sideproject Hub.',
}

export default function PinchPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#080a14] text-white">
      <header className="flex shrink-0 items-center justify-between border-b border-white/10 bg-[#080a14]/95 px-4 py-3 backdrop-blur sm:px-6">
        <Link href="/" className="text-sm font-semibold text-slate-300 transition hover:text-white">
          Sideproject Hub
        </Link>
        <a
          href="/pinch/index.html"
          className="rounded-md border border-white/15 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-white/35 hover:text-white"
        >
          Open full screen
        </a>
      </header>
      <iframe
        title="Pinch hand-tracking game"
        src="/pinch/index.html"
        className="min-h-0 flex-1 border-0"
        allow="camera; fullscreen"
      />
    </main>
  )
}
