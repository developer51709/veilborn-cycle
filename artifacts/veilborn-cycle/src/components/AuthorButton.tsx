import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { SiDiscord, SiTwitch } from "react-icons/si";

export default function AuthorButton() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          ref={popupRef}
          className="bg-card border border-border rounded-2xl shadow-2xl p-5 w-72 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src="/author-nyxen.png"
                alt="Nyxen"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
              />
              <div>
                <p className="font-cinzel font-bold text-foreground text-base leading-tight">
                  Nyxen
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  Author of The Veilborn Cycle
                </p>
              </div>
            </div>
            <button
              data-testid="button-close-author"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-muted/50"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Fantasy author crafting stories of shadow magic, forbidden legacies,
            and the worlds hidden just beyond the veil.
          </p>

          <div className="flex flex-col gap-2">
            <a
              href="https://discord.com/users/nyxenwastaken"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-discord"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#5865F2]/15 hover:bg-[#5865F2]/25 border border-[#5865F2]/30 transition-all group"
            >
              <SiDiscord className="text-[#5865F2] shrink-0" size={18} />
              <div>
                <p className="text-xs text-muted-foreground leading-none mb-0.5">
                  Discord
                </p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  @nyxenwastaken
                </p>
              </div>
            </a>

            <a
              href="https://twitch.tv/nyxenwastaken"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-twitch"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#9146FF]/15 hover:bg-[#9146FF]/25 border border-[#9146FF]/30 transition-all group"
            >
              <SiTwitch className="text-[#9146FF] shrink-0" size={18} />
              <div>
                <p className="text-xs text-muted-foreground leading-none mb-0.5">
                  Twitch
                </p>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  @nyxenwastaken
                </p>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        data-testid="button-author-info"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-cinzel text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg transition-all active:scale-95 glow-violet"
        title="About the Author"
      >
        <img
          src="/author-nyxen.png"
          alt="Nyxen"
          className="w-5 h-5 rounded-full object-cover border border-white/30"
        />
        Nyxen
      </button>
    </div>
  );
}
