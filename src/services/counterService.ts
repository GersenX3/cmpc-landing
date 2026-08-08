/**
 * Servicio del contador de "días sin incidentes".
 *
 * ⚠️ IMPLEMENTACIÓN TEMPORAL — usa localStorage, así que el valor solo
 * se ve en el navegador donde se editó, no es compartido entre visitantes.
 *
 * Cuando el backend PHP/MySQL esté listo, reemplazar el cuerpo de
 * `getDias()` y `setDias()` por fetch/GET y fetch/POST a algo como
 * `/api/contador-incidentes`, manteniendo la misma firma de funciones
 * para no tener que tocar los componentes que las consumen.
 */

const STORAGE_KEY = "cmpc_dias_sin_incidentes";
const DEFAULT_DIAS = 0;

export async function getDias(): Promise<number> {
  // TODO backend real: reemplazar por `await fetch("/api/contador-incidentes")`
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? Number(raw) : DEFAULT_DIAS;
}

export async function setDias(dias: number): Promise<void> {
  // TODO backend real: reemplazar por
  // `await fetch("/api/contador-incidentes", { method: "POST", body: ... })`
  localStorage.setItem(STORAGE_KEY, String(dias));
}
