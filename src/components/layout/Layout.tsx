import type { ReactNode } from "react";
import Sidebar, { type SidebarItem } from "./Sidebar";

interface LayoutProps {
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  children: ReactNode;
}

function Layout({ items, activeId, onSelect, children }: LayoutProps) {
  return (
    <div className="d-flex">
      <div className="col-12 col-md-3 col-lg-2 p-0">
        <Sidebar items={items} activeId={activeId} onSelect={onSelect} />
      </div>
      <main className="flex-grow-1 p-4">{children}</main>
    </div>
  );
}

export default Layout;
