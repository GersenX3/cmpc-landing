import LinkCard from "../components/ui/LinkCard";

/**
 * Sección de ejemplo — sirve de plantilla para las secciones reales.
 * Cada tab del sidebar tendrá su propio archivo en /sections
 * siguiendo esta misma estructura: un título y una grilla de LinkCard.
 */
function EjemploSeccion() {
  return (
    <section>
      <h1 className="mb-4">Sección de ejemplo</h1>
      <div className="row g-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <LinkCard
            title="Nombre del link"
            description="Descripción breve del destino."
            href="https://www.cmpc.com"
          />
          
        </div>
      </div>
    </section>
  );
}

export default EjemploSeccion;
