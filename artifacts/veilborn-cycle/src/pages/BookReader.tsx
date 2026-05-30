import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams, Link } from "wouter";
import { books, getBook } from "@/data/books";
import { ChevronLeft, ChevronRight, Bookmark, BookmarkCheck, Home, Menu, X, Download } from "lucide-react";

const STORAGE_KEY = "veilborn-bookmarks";
const WORDS_PER_PAGE = 380;

function paginateContent(content: string): string[][] {
  const paragraphs = content.split("\n\n").filter((p) => p.trim());
  const pages: string[][] = [];
  let page: string[] = [];
  let count = 0;
  for (const para of paragraphs) {
    const w = para.trim().split(/\s+/).length;
    if (count > 0 && count + w > WORDS_PER_PAGE) {
      pages.push(page);
      page = [para];
      count = w;
    } else {
      page.push(para);
      count += w;
    }
  }
  if (page.length > 0) pages.push(page);
  return pages.length > 0 ? pages : [[""]];
}

function getBookmarks(): Record<string, number> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveBookmark(slug: string, chapter: number) {
  const marks = getBookmarks();
  marks[slug] = chapter;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(marks));
}

function removeBookmark(slug: string) {
  const marks = getBookmarks();
  delete marks[slug];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(marks));
}

export default function BookReader() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const book = getBook(slug);

  const bookmarks = getBookmarks();
  const savedChapter = bookmarks[slug] ?? 0;
  const [currentChapter, setCurrentChapter] = useState(savedChapter);
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(slug in bookmarks);
  const [showBookmarkBanner, setShowBookmarkBanner] = useState<string | false>(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const bannerTimer = useRef<ReturnType<typeof setTimeout>>();
  const desiredPageRef = useRef(0);

  useEffect(() => {
    setCurrentPage(desiredPageRef.current);
    desiredPageRef.current = 0;
  }, [currentChapter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentChapter, currentPage]);

  const chapter = book?.chapters[currentChapter];
  const pages = useMemo(() => paginateContent(chapter?.content ?? ""), [chapter]);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;
  const isFirstChapter = currentChapter === 0;
  const isLastChapter = !book || currentChapter === book.chapters.length - 1;
  const isVeryFirst = isFirstPage && isFirstChapter;
  const isVeryLast = isLastPage && isLastChapter;

  const handlePrev = useCallback(() => {
    if (!isFirstPage) {
      setCurrentPage((p) => p - 1);
    } else if (!isFirstChapter && book) {
      const prevPages = paginateContent(book.chapters[currentChapter - 1].content);
      desiredPageRef.current = prevPages.length - 1;
      setCurrentChapter((c) => c - 1);
    }
  }, [isFirstPage, isFirstChapter, currentChapter, book]);

  const handleNext = useCallback(() => {
    if (!isLastPage) {
      setCurrentPage((p) => p + 1);
    } else if (!isLastChapter) {
      setCurrentChapter((c) => c + 1);
    }
  }, [isLastPage, isLastChapter]);

  const handleChapterSelect = useCallback((idx: number) => {
    desiredPageRef.current = 0;
    setCurrentChapter(idx);
    setSidebarOpen(false);
  }, []);

  const handleBookmark = useCallback(() => {
    if (isBookmarked && bookmarks[slug] === currentChapter) {
      removeBookmark(slug);
      setIsBookmarked(false);
      triggerBanner("Bookmark removed");
    } else {
      saveBookmark(slug, currentChapter);
      setIsBookmarked(true);
      triggerBanner("Chapter bookmarked!");
    }
  }, [isBookmarked, slug, currentChapter, bookmarks]);

  function triggerBanner(msg: string) {
    setShowBookmarkBanner(msg as string);
    clearTimeout(bannerTimer.current);
    bannerTimer.current = setTimeout(() => setShowBookmarkBanner(false), 2200);
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="font-cinzel text-muted-foreground text-lg mb-4">Book not found</p>
          <Link href="/">
            <button className="font-cinzel text-primary hover:text-primary/80 text-sm transition-colors">
              ← Return to Library
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const progress =
    ((currentChapter + (currentPage + 1) / pages.length) / book.chapters.length) * 100;

  const prevLabel = isFirstPage ? "Prev Chapter" : "Previous";
  const nextLabel = isLastPage ? "Next Chapter" : "Next";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showBookmarkBanner && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-primary text-primary-foreground font-cinzel text-xs px-5 py-2.5 rounded-full shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {showBookmarkBanner}
        </div>
      )}

      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <Link href="/">
          <button
            data-testid="button-home"
            className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted/50"
          >
            <Home size={18} />
          </button>
        </Link>

        <div className="flex-1 min-w-0">
          <button
            data-testid="button-toc-toggle"
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-left min-w-0 w-full"
          >
            <Menu size={15} className="text-muted-foreground shrink-0" />
            <div className="min-w-0">
              <p className="font-cinzel font-bold text-foreground text-sm truncate leading-tight">
                {book.title}
              </p>
              <p className="text-muted-foreground text-xs truncate">{chapter?.title}</p>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            data-testid="button-bookmark"
            onClick={handleBookmark}
            title={
              isBookmarked && bookmarks[slug] === currentChapter
                ? "Remove bookmark"
                : "Bookmark this chapter"
            }
            className={`p-1.5 rounded-lg transition-all ${
              isBookmarked && bookmarks[slug] === currentChapter
                ? "text-accent bg-accent/10"
                : "text-muted-foreground hover:text-accent hover:bg-muted/50"
            }`}
          >
            {isBookmarked && bookmarks[slug] === currentChapter ? (
              <BookmarkCheck size={18} />
            ) : (
              <Bookmark size={18} />
            )}
          </button>

          <a
            href={`${import.meta.env.BASE_URL}pdfs/book${book.id}-${book.slug}.pdf`}
            download
            data-testid="button-download-pdf"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            title="Download PDF"
          >
            <Download size={18} />
          </a>
        </div>
      </nav>

      <div className="h-0.5 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-1 relative">
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative z-10 w-80 max-w-[85vw] bg-card border-r border-border h-full overflow-y-auto animate-in slide-in-from-left duration-200">
              <div className="sticky top-0 bg-card/95 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-cinzel font-bold text-foreground text-sm">{book.title}</p>
                  <p className="text-muted-foreground text-xs">{book.chapters.length} chapters</p>
                </div>
                <button
                  data-testid="button-close-sidebar"
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-3">
                {book.chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    data-testid={`button-chapter-${idx}`}
                    onClick={() => handleChapterSelect(idx)}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-all mb-1 group ${
                      idx === currentChapter
                        ? "bg-primary/15 border border-primary/20"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`font-cinzel font-bold text-xs mt-0.5 shrink-0 w-5 text-right ${
                          idx === currentChapter ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span
                        className={`text-sm leading-snug ${
                          idx === currentChapter
                            ? "text-foreground font-medium"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {ch.title}
                      </span>
                      {bookmarks[slug] === idx && (
                        <BookmarkCheck size={12} className="text-accent shrink-0 mt-1 ml-auto" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-t border-border mt-2 p-3">
                <p className="font-cinzel text-muted-foreground text-xs tracking-widest uppercase px-3 mb-2">
                  More Books
                </p>
                {books.map((b) => (
                  <Link key={b.id} href={`/read/${b.slug}`}>
                    <button
                      data-testid={`button-book-nav-${b.id}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all mb-1 ${
                        b.slug === slug
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        className="w-8 h-11 object-cover rounded shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-cinzel font-semibold text-xs leading-tight truncate">
                          {b.title}
                        </p>
                        <p className="text-xs opacity-60 mt-0.5">
                          {b.subtitle.split("—")[1]?.trim()}
                        </p>
                      </div>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
          <div className="mb-10 text-center">
            <p className="font-cinzel text-primary/70 text-xs tracking-[0.25em] uppercase mb-3">
              {book.title} — Chapter {currentChapter + 1} of {book.chapters.length}
            </p>
            <h1 className="font-cinzel font-bold text-3xl md:text-4xl text-foreground leading-tight mb-3">
              {chapter?.title}
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
          </div>

          <div className="font-serif text-foreground/90 text-xl leading-[1.9] space-y-6">
            {(pages[currentPage] ?? []).map((para, i) => {
              if (para.startsWith("---")) {
                return (
                  <div key={i} className="flex items-center justify-center gap-4 my-8">
                    <div className="h-px w-12 bg-border" />
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <div className="h-px w-12 bg-border" />
                  </div>
                );
              }
              if (para.startsWith("*") && para.endsWith("*")) {
                return (
                  <p key={i} className="italic text-muted-foreground text-base text-center mt-8">
                    {para.slice(1, -1)}
                  </p>
                );
              }
              const isFirstParaOfChapter = currentPage === 0 && i === 0;
              return (
                <p
                  key={i}
                  className={
                    isFirstParaOfChapter
                      ? "first-letter:text-5xl first-letter:font-cinzel first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none"
                      : ""
                  }
                >
                  {para}
                </p>
              );
            })}
          </div>

          <div className="mt-16 flex items-center justify-between gap-4 border-t border-border/50 pt-8">
            <button
              data-testid="button-prev-chapter"
              onClick={handlePrev}
              disabled={isVeryFirst}
              className={`flex items-center gap-2 font-cinzel text-sm transition-all px-4 py-2.5 rounded-xl ${
                isVeryFirst
                  ? "opacity-30 cursor-not-allowed"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <ChevronLeft size={16} />
              {prevLabel}
            </button>

            <div className="text-center">
              <p className="font-cinzel text-muted-foreground text-xs">
                Page {currentPage + 1} of {pages.length}
              </p>
              <p className="font-cinzel text-muted-foreground/50 text-xs mt-0.5">
                Ch {currentChapter + 1}/{book.chapters.length}
              </p>
            </div>

            <button
              data-testid="button-next-chapter"
              onClick={handleNext}
              disabled={isVeryLast}
              className={`flex items-center gap-2 font-cinzel text-sm transition-all px-4 py-2.5 rounded-xl ${
                isVeryLast
                  ? "opacity-30 cursor-not-allowed"
                  : isLastPage
                  ? "text-primary font-semibold hover:bg-primary/10"
                  : "text-foreground hover:bg-primary/10 hover:text-primary font-medium"
              }`}
            >
              {nextLabel}
              <ChevronRight size={16} />
            </button>
          </div>

          {isVeryLast && (
            <div className="mt-8 text-center p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <p className="font-cinzel text-primary text-lg font-bold mb-2">The End</p>
              <p className="font-serif text-muted-foreground mb-5">
                Thank you for reading The Veilborn Cycle.
              </p>
              <Link href="/">
                <button
                  data-testid="button-return-library"
                  className="font-cinzel text-sm bg-primary text-primary-foreground px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all"
                >
                  Return to Library
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
