import { Link } from "wouter";
import { books } from "@/data/books";
import { BookOpen, Download, Star } from "lucide-react";

const themeColors: Record<string, string> = {
  Identity: "from-violet-900/60 to-indigo-900/40",
  Legacy: "from-purple-900/60 to-violet-900/40",
  Rebellion: "from-red-900/50 to-purple-900/40",
  War: "from-orange-900/50 to-red-900/40",
  Power: "from-amber-900/50 to-purple-900/40",
};

const themeBadgeColors: Record<string, string> = {
  Identity: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Legacy: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Rebellion: "bg-red-500/20 text-red-300 border-red-500/30",
  War: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Power: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-border/50">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, hsl(265 70% 50%), transparent)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="font-cinzel text-primary/80 text-sm tracking-[0.25em] uppercase mb-4 text-glow-violet">
            A Fantasy Series by Nyxen
          </p>
          <h1 className="font-cinzel font-black text-5xl md:text-7xl text-foreground mb-4 tracking-wide">
            The Veilborn Cycle
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
            <Star
              className="text-accent fill-accent"
              size={14}
              data-testid="icon-star-divider"
            />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg font-serif">
            Five books. One bloodline. The truth the shadows kept. Follow Cael
            Rowan — the last of the Umbra — as he unravels three centuries of
            lies and reshapes the hidden magical world.
          </p>
        </div>
      </header>

      {/* Books Grid */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-cinzel text-center text-muted-foreground text-xs tracking-[0.3em] uppercase mb-12">
          The Complete Series
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-20">
          {books.map((book) => (
            <div
              key={book.id}
              data-testid={`card-book-${book.id}`}
              className="group flex flex-col"
            >
              {/* Cover */}
              <Link href={`/read/${book.slug}`} className="block mb-3">
                <div className="relative overflow-hidden rounded-xl cover-shadow cursor-pointer transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    data-testid={`img-cover-${book.id}`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm rounded-full p-3">
                      <BookOpen size={20} className="text-primary" />
                    </div>
                  </div>
                  {/* Book number badge */}
                  <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center">
                    <span className="font-cinzel font-bold text-primary text-xs">
                      {book.id}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="flex flex-col gap-1.5 flex-1">
                <span
                  className={`self-start text-[10px] font-medium px-2 py-0.5 rounded-full border font-cinzel tracking-wide ${themeBadgeColors[book.theme]}`}
                >
                  {book.theme}
                </span>
                <Link href={`/read/${book.slug}`}>
                  <h3 className="font-cinzel font-bold text-foreground text-sm leading-tight hover:text-primary transition-colors cursor-pointer">
                    {book.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 font-serif">
                  {book.description}
                </p>
                <div className="mt-auto pt-2 flex items-center gap-2">
                  <Link href={`/read/${book.slug}`} className="flex-1">
                    <button
                      data-testid={`button-read-${book.id}`}
                      className="w-full flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary rounded-lg px-2 py-1.5 text-xs font-cinzel font-semibold transition-all"
                    >
                      <BookOpen size={12} />
                      Read
                    </button>
                  </Link>
                  <a
                    href={`/pdfs/book${book.id}-${book.slug}.pdf`}
                    download
                    data-testid={`link-download-${book.id}`}
                    className="flex items-center justify-center bg-muted/50 hover:bg-muted border border-border text-muted-foreground rounded-lg p-1.5 transition-all"
                    title="Download PDF"
                  >
                    <Download size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Series info section */}
        <div className="border border-border/50 rounded-2xl p-8 veil-gradient">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cinzel text-2xl font-bold text-foreground mb-4">
              About the Series
            </h2>
            <p className="font-serif text-muted-foreground leading-relaxed text-lg mb-6">
              Eighteen-year-old Cael Rowan discovers he belongs to a forbidden
              bloodline of Umbra mages — the strongest dark-magic users in
              history. The magical world, known as the Veiled, is hidden from
              normal society by a metaphysical barrier called the Veil.
              Centuries ago, the ruling Council of Lumen banned Umbra magic and
              secretly placed memory-lock spells on every dark-magic family,
              erasing their history and suppressing their power.
            </p>
            <p className="font-serif text-muted-foreground leading-relaxed text-lg">
              Across five books, Cael must master the magic he was never meant
              to wield, gather allies, and dismantle the corrupt system that
              fears him.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 py-8 text-center">
        <p className="font-cinzel text-muted-foreground text-xs tracking-widest uppercase">
          The Veilborn Cycle &copy; Nyxen
        </p>
      </footer>
    </div>
  );
}
