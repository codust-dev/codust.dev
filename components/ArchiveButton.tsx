'use client'

export default function ArchiveButton() {
  return (
    <button
      onClick={() => window.open('https://newsletter.codust.dev/', '_blank')}
      className="bg-[#4051B5] text-white no-underline px-8 py-3 rounded-lg font-semibold hover:bg-[#2D3A8C] transition-colors"
    >
      View Archive
    </button>
  )
} 