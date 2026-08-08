import { useEffect, useState } from "react";
import * as counterService from "../../services/counterService";

/**
 * Contador "Días sin incidentes". Lee el valor guardado (por ahora en
 * localStorage, ver services/counterService.ts) y lo muestra en una
 * tarjeta destacada. Se actualiza si otra pestaña/panel lo modifica
 * mientras esta vista está abierta (evento "storage").
 */
function DaysCounter() {
  const [dias, setDiasState] = useState<number | null>(null);

  useEffect(() => {
    counterService.getDias().then(setDiasState);

    const handleStorage = () => {
      counterService.getDias().then(setDiasState);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="cmpc-dias-contador mx-auto" data-aos="fade-up">
      <i className="bi bi-shield-check cmpc-dias-contador__icono" aria-hidden="true" />
      <span className="cmpc-dias-contador__numero">
        {dias === null ? "—" : dias}
      </span>
      <span className="cmpc-dias-contador__label">
        Días sin incidentes
      </span>
    </div>
  );
}

export default DaysCounter;
