import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="font-cinzel text-primary/60 text-6xl font-black mb-4">404</p>
        <h1 className="font-cinzel text-foreground text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="font-serif text-muted-foreground mb-8">
          The shadows did not lead here. Perhaps the Veil shifted.
        </p>
        <Link href="/">
          <button className="font-cinzel text-sm bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all">
            Return to Library
          </button>
        </Link>
      </div>
    </div>
  );
}
