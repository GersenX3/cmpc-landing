/**
 * Servicio de autenticación.
 *
 * ⚠️ IMPLEMENTACIÓN TEMPORAL — mientras no exista el backend PHP/MySQL.
 * Verifica contra credenciales embebidas en el build (variables de entorno),
 * lo cual NO es seguro para producción real: cualquiera puede leerlas
 * inspeccionando el JS del sitio. Es solo un candado básico transitorio.
 *
 * Cuando el backend esté listo, reemplazar `login()` por un fetch/POST
 * a algo como `/api/auth/login` que devuelva un token de sesión real,
 * y guardar ese token en vez del flag booleano de abajo.
 */

const SESSION_KEY = "cmpc_admin_session";

const ADMIN_USER = import.meta.env.VITE_ADMIN_USER as string | undefined;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as
  | string
  | undefined;

export async function login(
  username: string,
  password: string
): Promise<boolean> {
  // TODO backend real: reemplazar por fetch a la API PHP y guardar el token
  // que devuelva, en vez de comparar credenciales acá.
  const ok = username === ADMIN_USER && password === ADMIN_PASSWORD;

  if (ok) {
    localStorage.setItem(SESSION_KEY, "1");
  }

  return ok;
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  return localStorage.getItem(SESSION_KEY) === "1";
}
