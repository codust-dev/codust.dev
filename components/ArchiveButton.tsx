'use client'

export default function ArchiveButton() {
  return (
    <button
      onClick={() => window.open('https://newsletter.codust.dev/', '_blank')}
      className="rounded-lg bg-[#4051B5] px-8 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#2D3A8C]"
    >
      View Archive
    </button>
  )
}
