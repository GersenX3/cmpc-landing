import { useState } from "react";
import LinkCard from "../components/ui/LinkCard";

interface CategoriaLink {
  title: string;
  href: string;
}

interface Categoria {
  id: string;
  label: string;
  icon: string; // clase de Bootstrap Icons, ej: "bi-shield-check"
  links: CategoriaLink[];
}

// TODO: reemplazar los href="#" por las URLs reales de cada recurso.
const CATEGORIAS: Categoria[] = [
  {
    id: "seguridad",
    label: "Seguridad",
    icon: "bi-shield-check",
    links: [
      { title: "Mapas de seguridad", href: "#" },
      { title: "Capacitaciones anuales", href: "#" },
      { title: "Brigadistas", href: "#" },
      { title: "Layout", href: "#" },
      { title: "Sistema Gestión Seguridad", href: "#" },
      { title: "SAT Contratista", href: "#" },
      { title: "Control de Llaves", href: "#" },
      { title: "Montacargas y apiladores", href: "#" },
      { title: "Procedimientos indicadores", href: "#" },
      { title: "Accidentes/Incidentes", href: "#" },
      { title: "Contratistas", href: "#" },
      { title: "Campañas", href: "#" },
      { title: "Pilar", href: "#" },
      { title: "Semáforo", href: "#" },
    ],
  },
  {
    id: "salud",
    label: "Salud",
    icon: "bi-heart-pulse",
    links: [
      { title: "Indicadores", href: "#" },
      { title: "Capacitaciones", href: "#" },
      { title: "Alergias", href: "#" },
      { title: "Campañas", href: "#" },
    ],
  },
  {
    id: "medio-ambiente",
    label: "Medio Ambiente",
    icon: "bi-tree",
    links: [
      { title: "Indicadores", href: "#" },
      { title: "Capacitaciones", href: "#" },
      { title: "IOCCAS", href: "#" },
      {
        title: "Incidente operacional con consecuencia ambiental",
        href: "#",
      },
      { title: "Campañas Químicos", href: "#" },
    ],
  },
];

/**
 * Sección "Seguridad, Salud y Medio Ambiente".
 * Tres tabs grandes y centrados (ícono + texto) que alternan
 * la grilla de LinkCard mostrada debajo. Estado interno, sin
 * afectar el sidebar principal.
 */
function SeccionPrincipal() {
  const [activeCategoria, setActiveCategoria] = useState(CATEGORIAS[0].id);
  const categoria = CATEGORIAS.find((c) => c.id === activeCategoria)!;

  return (
    <section>
      <div className="cmpc-cat-tabs mb-5">
        {CATEGORIAS.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`cmpc-cat-tab ${
              cat.id === activeCategoria ? "active" : ""
            }`}
            onClick={() => setActiveCategoria(cat.id)}
          >
            <i className={`bi ${cat.icon}`} aria-hidden="true" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="row g-4">
        {categoria.links.map((link) => (
          <div className="col-12 col-sm-6 col-lg-4" key={link.title}>
            <LinkCard title={link.title} href={link.href} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeccionPrincipal;