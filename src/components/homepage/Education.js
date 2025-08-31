import { ListSection } from "./ItemList";

const engineering = [
  {
    period: "2025–2026",
    institution: "DataScientest",
    degree: "Master’s degree",
    details: "Full-stack development",
    icon: "/datascientest-original.png",
  },
  {
    period: "2022–2024",
    institution: "OpenClassrooms",
    degree: "Bachelor’s degree",
    details: "Front-end development",
    icon: "/openclassrooms-original.png",
  },
];

const humanities = [
  {
    period: "2017–2019",
    institution: "Sorbonne Nouvelle",
    degree: "Master's degree",
    details: "Drones in contemporary fictions",
  },
  {
    period: "2013–2015",
    institution: "IEP / ENS Lyon",
    degree: "Master’s degree",
    details: "Lobbying and influence in the automotive industry",
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
    <section className="min-w-[300px] mb-10 mx-4">
      <div className="flex flex-row bg-black/50 p-6 shadow-lg w-full rounded-2xl border border-white/10 gap-10">
        <div className="min-w-[350px]">
          <ListSection
            heading="Software engineering"
            items={engItems}
            imgSize={40}
          />
        </div>
        <div className="min-w-[400px]">
          <ListSection heading="Humanities" items={humItems} imgSize={40} />
        </div>
      </div>
    </section>
  );
}
