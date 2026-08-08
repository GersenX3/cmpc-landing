import { type FormEvent, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import * as counterService from "../services/counterService";

function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const ok = await login(username, password);
    setLoading(false);
    if (!ok) {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="cmpc-admin-login mx-auto">
      <h1 className="h4 mb-4 text-center">Acceso administrativo</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Usuario
          </label>
          <input
            id="username"
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        {error && <div className="alert alert-rojo1 py-2">{error}</div>}
        <button
          type="submit"
          className="btn btn-verde w-100"
          disabled={loading}
        >
          {loading ? "Ingresando…" : "Ingresar"}
        </button>
      </form>
    </div>
  );
}

function ContadorAdmin() {
  const [dias, setDias] = useState<number>(0);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    counterService.getDias().then((value) => {
      setDias(value);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await counterService.setDias(dias);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return null;

  return (
    <div className="cmpc-tarjeta mb-4">
      <h2 className="h5 mb-3">Días sin incidentes</h2>
      <form onSubmit={handleSubmit} className="d-flex align-items-end gap-3">
        <div className="flex-grow-1">
          <label htmlFor="dias" className="form-label">
            Número de días
          </label>
          <input
            id="dias"
            type="number"
            min={0}
            className="form-control"
            value={dias}
            onChange={(e) => setDias(Number(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-verde">
          Guardar
        </button>
      </form>
      {saved && (
        <div className="text-verde mt-2 small">
          <i className="bi bi-check-circle me-1" />
          Guardado.
        </div>
      )}
    </div>
  );
}

/**
 * Sección "Admin" del sidebar. Sin sesión activa, muestra el login;
 * autenticado, muestra los paneles de gestión (por ahora solo el
 * contador de días sin incidentes; otros sistemas se agregan acá
 * como nuevos bloques dentro del mismo "if isAuthenticated").
 */
function AdminPanel() {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Panel administrativo</h1>
        <button className="btn btn-outline-gris11 btn-sm" onClick={logout}>
          Cerrar sesión
        </button>
      </div>

      <ContadorAdmin />

      {/* Futuros paneles de administración van acá, como nuevos
          bloques .cmpc-tarjeta debajo de este. */}
    </section>
  );
}

export default AdminPanel;
