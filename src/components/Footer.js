export default function Footer() {
    return (
      <footer className="bg-white border-t border-slate-200 py-6 mt-10">
        <div className="text-center text-slate-600 text-sm">
          Developed & Designed by <span className="font-semibold text-sky-600">Uttam Gogineni</span> © {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
  