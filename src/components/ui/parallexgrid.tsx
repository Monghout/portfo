import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxGridProps {
  items: {
    src: string;
    alt: string;
  }[];
  columns?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  intensity?: number;
  className?: string;
  itemClassName?: string;
}

const ParallaxGrid: React.FC<ParallaxGridProps> = ({
  items,
  columns = { base: 2, md: 3, lg: 4 },
  intensity = 20,
  className = "",
  itemClassName = "h-64 w-full rounded-lg object-cover",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate responsive grid columns
  const gridClasses = `
    grid-cols-${columns.base || 2}
    ${columns.sm ? `sm:grid-cols-${columns.sm}` : ""}
    ${columns.md ? `md:grid-cols-${columns.md}` : ""}
    ${columns.lg ? `lg:grid-cols-${columns.lg}` : ""}
    ${columns.xl ? `xl:grid-cols-${columns.xl}` : ""}
  `;

  return (
    <div
      ref={containerRef}
      className={`grid ${gridClasses} gap-4 ${className}`}
    >
      {items.map((item, index) => {
        const row = Math.floor(index / (columns.base || 2));
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [row % 2 === 0 ? 0 : -intensity, row % 2 === 0 ? intensity : 0]
        );

        return (
          <motion.div
            key={index}
            style={{ y }}
            className="overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.img
              src={item.src}
              alt={item.alt}
              className={itemClassName}
              loading="lazy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParallaxGrid;
