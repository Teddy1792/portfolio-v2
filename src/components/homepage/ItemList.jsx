import Image from "next/image";

export function ItemRow({ title, subtitle, extra, icon, imgSize = 36 }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2">
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
    </li>
  );
}

export function ListSection({
  heading,
  items,
  mapItem,
  imgSize,
  gap = "gap-4",
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-3xl uppercase tracking-widest opacity-80 mb-4">
        {heading}
      </h3>
      <ul className={`grid grid-cols-1 ${gap}`}>
        {items.map((it, idx) => {
          const mapped = mapItem(it);
          return (
            <ItemRow
              key={mapped.key ?? `${mapped.title}-${idx}`}
              title={mapped.title}
              subtitle={mapped.subtitle}
              extra={mapped.extra}
              icon={mapped.icon}
              imgSize={imgSize}
            />
          );
        })}
      </ul>
    </div>
  );
}
