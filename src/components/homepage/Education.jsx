import { ListSection } from "./ItemList";

const engineering = [
  {
    period: "2025–2026",
    institution: "DataScientest",
    degree: "Master’s",
    details: "Full-stack development",
    icon: "/datascientest-original.png",
  },
  {
    period: "2022–2024",
    institution: "OpenClassrooms",
    degree: "Bachelor’s",
    details: "Front-end development",
    icon: "/openclassrooms-original.png",
  },
];

const humanities = [
  {
    period: "2017–2019",
    institution: "Sorbonne Nouvelle",
    degree: "Master's",
    details: "Drones in contemporary fictions",
  },
  {
    period: "2013–2015",
    institution: "IEP / ENS Lyon",
    degree: "Master’s",
    details: "Lobbying in the automotive industry",
  },
  {
    period: "2010–2013",
    institution: "CPGE - A/L prep school",
    degree: null,
    details: null,
  },
];

export default function Education() {
  const engItems = engineering.map((it) => ({
    key: `${it.period}-${it.institution}`,
    title: `${it.institution}${it.degree ? " — " + it.degree : ""}`,
    subtitle: it.period,
    extra: it.details || null,
    icon: it.icon || null,
  }));

  const humItems = humanities.map((it) => ({
    key: `${it.period}-${it.institution}`,
    title: `${it.institution}${it.degree ? " — " + it.degree : ""}`,
    subtitle: it.period,
    extra: it.details || null,
    icon: null,
  }));

  return (
    <section className="w-full lg mb-6 mx-auto">
      <div className="flex flex-col lg:flex-row bg-black/50 p-4 sm:p-6 shadow-lg rounded-2xl border border-white/10 gap-6 lg:gap-10">
        <div className="w-full lg:w-1/2">
          <ListSection
            heading="Software engineering"
            items={engItems}
            imgSize={32}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <ListSection heading="Humanities" items={humItems} imgSize={32} />
        </div>
      </div>
    </section>
  );
}
