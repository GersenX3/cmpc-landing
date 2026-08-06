interface LinkCardProps {
  title: string;
  description?: string;
  href: string;
}

/**
 * Tarjeta de redirección: abre `href` en una pestaña nueva.
 * Estilo base tomado del patrón ".cmpc-tarjeta" del sitio CMPC.
 */
function LinkCard({ title, description, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cmpc-tarjeta d-block text-decoration-none h-100"
      data-aos="fade-up"
    >
      <h3 className="h5 text-cafe1 mb-2">{title}</h3>
      {description && <p className="text-negro2 mb-0">{description}</p>}
    </a>
  );
}

export default LinkCard;
