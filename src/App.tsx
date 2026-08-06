import { useState } from "react";
import Layout from "./components/layout/Layout";
import type { SidebarItem } from "./components/layout/Sidebar";
import EjemploSeccion from "./sections/EjemploSeccion";
import SeccionPrincipal from "./sections/SeccionPrincipal";

// Cada entrada acá corresponde a un tab del sidebar.
// A medida que se agreguen secciones reales, se suman aquí
// y se registran en SECTION_COMPONENTS más abajo.
const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "Principal", label: "Principal" },
  { id: "ejemplo1", label: "Ejemplo1" },
  { id: "ejemplo2", label: "Ejemplo2" },
  { id: "ejemplo3", label: "Ejemplo3" },
  { id: "ejemplo4", label: "Ejemplo4" },
];

const SECTION_COMPONENTS: Record<string, () => React.ReactElement> = {
  Principal: SeccionPrincipal,
  ejemplo1: EjemploSeccion,
  ejemplo2: EjemploSeccion,
  ejemplo3: EjemploSeccion,
  ejemplo4: EjemploSeccion,
};

function App() {
  const [activeId, setActiveId] = useState(SIDEBAR_ITEMS[0].id);
  const ActiveSection = SECTION_COMPONENTS[activeId];

  return (
    <Layout items={SIDEBAR_ITEMS} activeId={activeId} onSelect={setActiveId}>
      <ActiveSection />
    </Layout>
  );
}

export default App;
