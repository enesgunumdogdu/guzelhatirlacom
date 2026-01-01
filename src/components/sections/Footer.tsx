export function Footer() {
  return (
    <footer className="py-4 mt-6 border-t border-white/[0.08] bg-[rgba(10,10,10,0.8)] backdrop-blur-[10px]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center items-center gap-1">
          <span className="text-sm text-white/60 font-medium tracking-wide">
            Made with
          </span>
          <span className="text-lg animate-heartbeat">
            💜
          </span>
          <span className="text-sm text-white/60 font-medium tracking-wide">
            by
          </span>
          <a
            href="https://enesgunumdogdu.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold tracking-wide bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125"
          >
            3nes
          </a>
        </div>
      </div>
    </footer>
  )
}
