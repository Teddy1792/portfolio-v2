import { ListSection } from "./ItemList";

const sapCore = [
  {
    label: "SAP BTP (admin)",
    icon: "/sap-icon.svg",
    hint: "Subaccounts, entitlements, destinations, roles",
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
    hint: "SSR/ISR, data fetching, performance",
  },
  {
    label: "React",
    icon: "react_logo.svg",
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
    <section className="min-w-[300px] mb-10 mx-4">
      <div className="bg-black/50 p-4 shadow-lg w-full rounded-2xl border border-white/10">
        <div className="flex w-full gap-10">
          <ListSection
            heading="Web / Full-stack — Core"
            items={webCoreItems}
            gap="gap-6"
          />
          <div className="space-y-14">
            <ListSection heading="SAP & Security — Core" items={sapCoreItems} />
            <ListSection heading="Tools & Extras" items={toolsItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
