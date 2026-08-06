export interface SidebarItem {
  id: string;
  label: string;
}

interface SidebarProps {
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

/**
 * Sidebar de navegación por tabs. Cada item corresponde a una
 * sección (src/sections/*) que se renderiza en el área principal.
 * No usa routing: el cambio de sección es estado local en <App />.
 */
function Sidebar({ items, activeId, onSelect }: SidebarProps) {
  return (
    <nav className="cmpc-sidebar d-flex flex-column py-4">
      <ul className="nav flex-column">
        {items.map((item) => (
          <li className="nav-item" key={item.id}>
            <button
              type="button"
              className={`cmpc-sidebar__link border-0 bg-transparent w-100 text-start ${
                item.id === activeId ? "active" : ""
              }`}
              onClick={() => onSelect(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
