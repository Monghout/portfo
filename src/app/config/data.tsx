import { motion } from "motion/react";
import React, { useState } from "react";

export interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

// GalleryImage type for better type safety
interface GalleryImage {
  src: string;
  alt: string;
}

// Enhanced ImageGallery component
interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
  thumbnailClassName?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  className = "grid grid-cols-4 gap-4",
  thumbnailClassName = "h-full w-full rounded-lg object-cover md:h-1/2 lg:h-full",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openImage = (index: number) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);
  const goNext = () =>
    currentIndex !== null &&
    setCurrentIndex((prev) => (prev! + 1) % images.length);
  const goPrev = () =>
    currentIndex !== null &&
    setCurrentIndex((prev) => (prev! - 1 + images.length) % images.length);

  return (
    <div className={className}>
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className={`${thumbnailClassName} cursor-pointer transition-transform duration-200 hover:scale-105`}
          onClick={() => openImage(index)}
        />
      ))}

      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 text-black hover:bg-opacity-30 transition z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-3 text-black hover:bg-opacity-30 transition z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Main image */}
            <img
              loading="lazy"
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[90vh] max-w-full object-contain mx-auto"
            />

            {/* Close button */}
            <button
              className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2 text-black hover:bg-opacity-30 transition"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const timelineData: TimelineItem[] = [
  {
    title: "Poster Photoshop",
    content: (
      <div>
        <p className="mb-4 text-2xl font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
          Adobe Photoshop - Class 1
        </p>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:h-full">
          <ImageGallery
            images={[1, 2].map((n) => ({
              src: `petcare/p${n}.png`,
              alt: `Menu item ${n}`,
            }))}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Menu PhotoShop",
    content: (
      <div>
        <p className="mb-4 text-2xl font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
          Adobe Photoshop - Class 2
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Gourmet Menu
        </p>
        <ImageGallery
          images={[1, 2, 3, 4, 5, 6, 7].map((n) => ({
            src: `menu/menu-${n}.png`,
            alt: `Menu item ${n}`,
          }))}
        />
      </div>
    ),
  },
  {
    title: "Figma",
    content: (
      <div>
        <p className="mb-4 text-2xl font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
          Adobe Photoshop - Class 1
        </p>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-3 md:h-1/2">
          <ImageGallery
            images={[{ src: "/petcare/petcare2.png", alt: "Large image" }]}
            className="grid grid-cols-1"
            thumbnailClassName="w-full h-64 md:h-full object-cover rounded-lg col-span-1 row-span-3 shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Canvas",
    content: (
      <div>
        <p className="mb-4 text-2xl font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
          Canvas Logo Design
        </p>
        <p className="mb-8 text-xs font-normal max-w-full object-cover text-neutral-800 md:text-sm dark:text-neutral-200">
          Poster Design
        </p>
        <ImageGallery
          images={[1, 2, 3].map((n) => ({
            src: `canva/canva${n}.png`,
            alt: ``,
          }))}
          thumbnailClassName="w-full h-64 md:h-full object-cover rounded-lg col-span-1 row-span-3 shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Project - 1",
    content: (
      <div>
        <p className="mb-4 text-2xl font-bold text-neutral-800 md:text-sm dark:text-neutral-200 pr-1">
          Major Project One -{" "}
          <a
            href="https://sombot.vercel.app/"
            className="text-white bg-black border-3 border-black px-1 rounded-2xl dark:text-black dark:bg-white dark:border-white"
            target="blank"
          >
            Sombot
          </a>
        </p>
        <p className="mb-8 text-xs font-normal max-w-full object-cover text-neutral-800 md:text-sm dark:text-neutral-200">
          Poster Design
        </p>
        <ImageGallery
          images={[1, 2, 3, 4, 5, 6, 7].map((n) => ({
            src: `sombot/sombot${n}.png`,
            alt: ``,
          }))}
        />
      </div>
    ),
  },
  {
    title: "Project - 2",
    content: (
      <div>
        <p className="mb-4 text-2xl font-bold text-neutral-800 md:text-sm dark:text-neutral-200">
          Major Project 2 -{" "}
          <a
            href="https://mj-2-camboket.vercel.app/"
            className="text-white bg-black border-3 border-black px-1 rounded-2xl dark:text-black dark:bg-white dark:border-white"
            target="blank"
          >
            Camboket
          </a>
        </p>

        <ImageGallery
          images={[1].map((n) => ({
            src: `cbk/cbk${n}.png`,
            alt: ``,
          }))}
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

          {/* Gradient heading with proper responsive sizing */}
          <div className="relative">
            <h1 className="text-4xl font-black bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Coming Soon
            </h1>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-2">
            <span className="text-sm text-neutral-800 dark:text-neutral-200 sm:text-base">
              If You're Interested You can go check my Profile page
            </span>
            <a
              href="/profile"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white bg-white px-2 py-2 text-sm font-bold text-black transition-all hover:bg-neutral-100 hover:scale-105 sm:px-4 sm:py-2 sm:text-base"
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
