export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2">
        {/* Brand */}
        <div>
          <p className="text-white font-medium mb-2">
            Timeless Graphics
          </p>
          <p className="text-sm max-w-sm">
            Visual storytelling through photography and film.
            Focused on emotion, light and authenticity.
          </p>
        </div>

        {/* Meta */}
        <div className="flex md:justify-end items-end">
          <p className="text-sm">
            © {new Date().getFullYear()} Timeless Graphics
          </p>
        </div>
      </div>
    </footer>
  );
}
