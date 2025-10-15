export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
        <div>© {new Date().getFullYear()} FluxxtoberFest. Built with ❤️ and curiosity.</div>
        <div className="mt-2">
          <a className="hover:underline" href="https://github.com/your-repo">GitHub</a> ·{" "}
          <a className="hover:underline" href="#about">About</a> ·{" "}
          <a className="hover:underline" href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
}
