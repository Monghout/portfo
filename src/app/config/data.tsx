"use client";

// Single-file version: gallery + timeline data together.
// "use client" is needed because ImageGallery uses useState.
// (`motion/react` was imported but never used, so it's removed.)
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  thumbnailClassName?: string;
  /** Tells the browser which file size to download. */
  sizes?: string;
}

/* ------------------------------------------------------------------ */
/* Image gallery                                                       */
/* ------------------------------------------------------------------ */

const ARROW_BTN =
  "absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = "grid grid-cols-4 gap-4",
  thumbnailClassName = "h-full w-full rounded-lg object-cover md:h-1/2 lg:h-full",
  sizes = "(max-width: 768px) 50vw, 25vw",
}) => {
  const [current, setCurrent] = useState<number | null>(null);
  const count = images.length;

  const close = useCallback(() => setCurrent(null), []);
  const next = useCallback(
    () => setCurrent((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );
  const prev = useCallback(
    () => setCurrent((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );

  // Keyboard support + scroll lock, only while the lightbox is open.
  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [current, close, next, prev]);

  return (
    <div className={className}>
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => setCurrent(index)}
          aria-label={`Open image ${index + 1} of ${count}`}
          className="group block h-full w-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            sizes={sizes}
            className={`${thumbnailClassName} cursor-pointer motion-safe:transition-transform motion-safe:duration-200 md:group-hover:scale-105`}
          />
        </button>
      ))}

      {current !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className={`${ARROW_BTN} left-4`}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className={`${ARROW_BTN} right-4`}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <Image
              src={images[current].src}
              alt={images[current].alt}
              width={1600}
              height={1200}
              sizes="100vw"
              quality={80}
              className="mx-auto h-auto w-auto max-h-[90vh] max-w-full object-contain"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {current + 1} / {count}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Helpers + shared classes                                            */
/* ------------------------------------------------------------------ */

// After you convert your images to WebP, change this to "webp".
const EXT = "png";

// Leading "/" on every path: the originals were relative ("menu/menu-1.png")
// and break on any nested route.
const seq = (
  count: number,
  path: (n: number) => string,
  alt: (n: number) => string
): GalleryImage[] =>
  Array.from({ length: count }, (_, i) => ({
    src: path(i + 1),
    alt: alt(i + 1),
  }));

const TITLE =
  "mb-4 text-2xl font-bold text-neutral-800 md:text-sm dark:text-neutral-200";
const SUBTITLE =
  "mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200";
const PILL =
  "rounded-2xl bg-black px-2 text-white dark:bg-white dark:text-black";
const TALL_THUMB =
  "w-full h-64 md:h-full object-cover rounded-lg col-span-1 row-span-3 shadow-md";

/* ------------------------------------------------------------------ */
/* Timeline data                                                       */
/* ------------------------------------------------------------------ */

export const timelineData: TimelineItem[] = [
  {
    title: "Poster Photoshop",
    content: (
      <div>
        <p className={TITLE}>Adobe Photoshop - Class 1</p>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:h-full">
          <ImageGallery
            images={seq(2, (n) => `/petcare/p${n}.${EXT}`, (n) => `Pet care poster ${n}`)}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Menu PhotoShop",
    content: (
      <div>
        <p className={TITLE}>Adobe Photoshop - Class 2</p>
        <p className={SUBTITLE}>Gourmet Menu</p>
        {/* Your folder has "meun-8.png" (typo). Rename it to "menu-8.png",
            then change 7 to 8 below to include it. */}
        <ImageGallery
          images={seq(7, (n) => `/menu/menu-${n}.${EXT}`, (n) => `Gourmet menu page ${n}`)}
        />
      </div>
    ),
  },
  {
    title: "Figma",
    content: (
      <div>
        <p className={TITLE}>Figma Poster</p>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-3 md:h-1/2">
          <ImageGallery
            images={[{ src: `/petcare/petcare2.${EXT}`, alt: "Pet care poster designed in Figma" }]}
            className="grid grid-cols-1"
            thumbnailClassName={TALL_THUMB}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Canvas",
    content: (
      <div>
        <p className={TITLE}>Canvas Logo Design</p>
        <p className={SUBTITLE}>Logo Design</p>
        <ImageGallery
          images={seq(3, (n) => `/canva/canva${n}.${EXT}`, (n) => `Logo design ${n}`)}
          thumbnailClassName={TALL_THUMB}
        />
      </div>
    ),
  },
  {
    title: "Project - 1",
    content: (
      <div>
        <p className={`${TITLE} pr-1`}>
          Major Project One -{" "}
          <a
            href="https://sombot.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={PILL}
          >
            Sombot
          </a>
        </p>
        <ImageGallery
          images={seq(7, (n) => `/sombot/sombot${n}.${EXT}`, (n) => `Sombot screenshot ${n}`)}
        />
      </div>
    ),
  },
  {
    title: "Project - 2",
    content: (
      <div>
        <p className={TITLE}>
          Major Project 2 -{" "}
          <a
            href="https://mj-2-camboket.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={PILL}
          >
            Camboket
          </a>
        </p>
        <ImageGallery
          images={[{ src: `/cbk/cbk1.${EXT}`, alt: "Camboket screenshot" }]}
        />
      </div>
    ),
  },
  {
    title: "End",
    content: (
      <div className="flex flex-col items-center justify-center px-2 py-4 text-center">
        <div className="max-w-xl mx-auto space-y-2">
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 sm:text-sm md:text-base">
            To Be Continue
          </p>
          <h1 className="text-4xl font-black bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Coming Soon
          </h1>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2">
            <span className="text-sm text-neutral-800 dark:text-neutral-200 sm:text-base">
              If You&apos;re Interested You can go check my Profile page
            </span>
            <a
              href="/profile"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white bg-white px-2 py-2 text-sm font-bold text-black transition-colors hover:bg-neutral-100 sm:px-4 sm:text-base"
            >
              Profile
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    ),
  },
];
