// components/ItemList.jsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function ItemRow({ title, subtitle, extra, icon, imgSize = 36 }) {
  const reduce = useReducedMotion();
  const item = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 8,
      filter: reduce ? "none" : "blur(2px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: EASE },
    },
  };

  return (
    <motion.li
      variants={item}
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2"
    >
      {icon ? (
        <Image
          src={icon}
          alt={title}
          width={imgSize}
          height={imgSize}
          className="shrink-0"
        />
      ) : null}
      <div className="min-w-0 flex flex-col gap-1">
        <p className="text-2xl font-semibold leading-6">{title}</p>
        {subtitle ? (
          <p className="text-xl leading-5 opacity-80">{subtitle}</p>
        ) : null}
        {extra ? <p className="text-lg leading-5 opacity-75">{extra}</p> : null}
      </div>
    </motion.li>
  );
}

export function ListSection({ heading, items, imgSize, gap = "gap-4" }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };

  return (
    <div className="space-y-2">
      <h3 className="text-3xl uppercase tracking-widest opacity-80 mb-4">
        {heading}
      </h3>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`grid grid-cols-1 ${gap}`}
      >
        {items.map((it, idx) => (
          <ItemRow
            key={it.key ?? `${it.title}-${idx}`}
            title={it.title}
            subtitle={it.subtitle}
            extra={it.extra}
            icon={it.icon}
            imgSize={imgSize}
          />
        ))}
      </motion.ul>
    </div>
  );
}
