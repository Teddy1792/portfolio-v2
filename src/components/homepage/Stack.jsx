import { ListSection } from "./ItemList";

const sapCore = [
  {
    label: "SAP BTP (admin)",
    icon: "/sap-icon.svg",
    hint: "Administration and development",
  },
  {
    label: "SAP Fiori / UI5",
    icon: "/UI5_logo_wide.png",
    hint: "Components, routing, theming",
  },
];

const webCore = [
  {
    label: "TypeScript",
    icon: "/typescript-original.svg",
    hint: "Strict types, utilities",
  },
  {
    label: "Next.js",
    icon: "/next_logo.svg",
    hint: "Architecture and design",
  },
  {
    label: "React",
    icon: "/react_logo.svg",
    hint: "State, effects, accessibility",
  },
  {
    label: "Tailwind CSS",
    icon: "/tailwind_CSS_logo.svg",
    hint: "Design system, responsive",
  },
  {
    label: "MongoDB",
    icon: "/mongodb-original.svg",
    hint: "Modeling, indexes",
  },
];

const toolsExtras = [
  {
    label: "Three.js",
    icon: "/Threejs-logo.svg",
    hint: "Minimal backgrounds/animations",
  },
  {
    label: "Firebase",
    icon: "/firebase-original.svg",
    hint: "Auth, real-time",
  },
];

export default function Stack() {
  const webCoreItems = webCore.map((it) => ({
    key: it.label,
    title: it.label,
    subtitle: it.hint,
    icon: it.icon || null,
  }));
  const sapCoreItems = sapCore.map((it) => ({
    key: it.label,
    title: it.label,
    subtitle: it.hint,
    icon: it.icon || null,
  }));
  const toolsItems = toolsExtras.map((it) => ({
    key: it.label,
    title: it.label,
    subtitle: it.hint,
    icon: it.icon || null,
  }));

  return (
    <section className="w-full mb-4 mx-auto">
      <div className="bg-black/50 p-4 sm:p-6 shadow-lg rounded-2xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ListSection heading="Web / Full-stack — Core" items={webCoreItems} />
          <div className="space-y-10">
            <ListSection heading="SAP & Security — Core" items={sapCoreItems} />
            <ListSection heading="Tools & Extras" items={toolsItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
