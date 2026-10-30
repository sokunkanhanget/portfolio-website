export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <div className="border-t border-[#dfc9a8] py-5 text-sm text-[#725d4b]">
        © {new Date().getFullYear()} Sokunkanha NGET
      </div>
    </footer>
  );
}