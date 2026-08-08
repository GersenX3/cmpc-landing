import { useState } from "react";
import Layout from "./components/layout/Layout";
import type { SidebarItem } from "./components/layout/Sidebar";
import SeguridadSaludMedioAmbiente from "./sections/SeguridadSaludMedioAmbiente";
import AdminPanel from "./sections/AdminPanel";
import { AuthProvider } from "./context/AuthContext";

// Cada entrada acá corresponde a un tab del sidebar principal.
// A medida que se agreguen secciones reales, se suman aquí
// y se registran en SECTION_COMPONENTS más abajo.
const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "sso-ma", label: "Seguridad, Salud y Medio Ambiente" },
  { id: "admin", label: "Admin" },
];

const SECTION_COMPONENTS: Record<string, () => React.ReactElement> = {
  "sso-ma": SeguridadSaludMedioAmbiente,
  admin: AdminPanel,
};

function App() {
  const [activeId, setActiveId] = useState(SIDEBAR_ITEMS[0].id);
  const ActiveSection = SECTION_COMPONENTS[activeId];

  return (
    <AuthProvider>
      <Layout items={SIDEBAR_ITEMS} activeId={activeId} onSelect={setActiveId}>
        <ActiveSection />
      </Layout>
    </AuthProvider>
  );
}

export default App;
