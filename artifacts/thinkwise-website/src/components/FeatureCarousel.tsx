import { useState, useRef, useEffect, useCallback } from "react";

function useCarouselVisible(wrapperRef: React.RefObject<HTMLDivElement | null>) {
  const [visible, setVisible] = useState(2.5);

  useEffect(() => {
    function calc() {
      const w = wrapperRef.current?.offsetWidth ?? window.innerWidth;
      if (w < 480) setVisible(1.15);
      else if (w < 768) setVisible(1.6);
      else if (w < 1024) setVisible(2.2);
      else setVisible(2.5);
    }
    calc();
    const ro = new ResizeObserver(calc);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [wrapperRef]);

  return visible;
}

interface FeatureCardProps {
  icon: string;
  color: string;
  glow: string;
  image: string;
  title: string;
  subtitle: string;
  items: string[];
}

interface FeatureCarouselProps {
  features: FeatureCardProps[];
}

export default function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [current, setCurrent] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const visible = useCarouselVisible(wrapperRef);
  const GAP = 20;

  const maxIndex = Math.max(0, features.length - Math.floor(visible));

  const goTo = useCallback(
    (i: number) => setCurrent(Math.max(0, Math.min(i, maxIndex))),
    [maxIndex]
  );

  // Keep current in bounds if visible changes (e.g. resize)
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  // Card width: fill wrapper accounting for gaps between visible cards
  const cardWidthPercent = `calc((100% - ${GAP * (Math.ceil(visible) - 1)}px) / ${visible})`;

  const translateX = `calc(-${current} * (${cardWidthPercent} + ${GAP}px))`;

  return (
    <div className="w-full">
      {/* Track wrapper — clips overflow */}
      <div className="relative overflow-hidden" ref={wrapperRef}>

        {/* Scrolling track */}
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${translateX})`,
            transition: "transform 0.48s cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        >
          {features.map((feat) => (
            <FeatureCard
              key={feat.title}
              feat={feat}
              cardWidthPercent={cardWidthPercent}
            />
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-5">
        {/* Prev / Next buttons — bottom left */}
        <div className="flex gap-2.5">
          <NavButton
            direction="prev"
            disabled={current === 0}
            onClick={() => goTo(current - 1)}
          />
          <NavButton
            direction="next"
            disabled={current === maxIndex}
            onClick={() => goTo(current + 1)}
          />
        </div>

        {/* Dot pagination — bottom right */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "rounded-full transition-all duration-300 focus:outline-none",
                i === current
                  ? "bg-slate-800 w-6 h-2"
                  : "bg-slate-300 hover:bg-slate-400 w-2 h-2",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Individual feature card ── */
function FeatureCard({
  feat,
  cardWidthPercent,
}: {
  feat: FeatureCardProps;
  cardWidthPercent: string;
}) {
  return (
    <div
      className="flex-shrink-0 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
      style={{
        width: cardWidthPercent,
        minWidth: 0,
        boxShadow: `0 0 40px ${feat.glow}`,
      }}
    >
      {/* Card Image */}
      <div className="relative h-44 overflow-hidden rounded-t-2xl">
        <img
          src={feat.image}
          alt={feat.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-4 text-2xl drop-shadow-lg">{feat.icon}</div>
      </div>

      {/* Card body */}
      <div className="relative p-6">
        {/* Subtle gradient tint behind content */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-5 group-hover:opacity-10 transition-opacity`}
        />

        <h3
          className={`relative text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${feat.color} mb-0.5`}
        >
          {feat.title}
        </h3>
        <p className="relative text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">
          {feat.subtitle}
        </p>

        <ul className="relative space-y-2">
          {feat.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <span className="text-cyan-500 mt-0.5 flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Prev / Next arrow button ── */
function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className={[
        "w-10 h-10 rounded-full flex items-center justify-center",
        "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
        disabled
          ? "bg-slate-300 text-slate-700 cursor-not-allowed"
          : "bg-slate-800 text-white hover:bg-slate-700 active:scale-95",
      ].join(" ")}
    >
      {direction === "prev" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 3L5 8l5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
