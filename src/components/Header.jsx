export default function Header({ title, subtitle, right }) {
  return (
    <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-gray-200 px-4 md:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-3">{right}</div>
      </div>
    </header>
  );
}
