import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  ["/plataforma", "Início", "⌂"],
  ["/solicitar-coleta", "Solicitar coleta", "▣"],
  ["/acompanhar", "Acompanhamentos", "⌁"],
  ["/historico", "Histórico e documentos", "▤"],
  ["/impacto", "Impacto gerado", "◌"],
  ["/pontos", "Pontos de coleta", "⌖"],
  ["/coletor", "App do coletor", "▥"]
];

export function WebShell({ children, active = "/plataforma" }: { children: React.ReactNode; active?: string }) {
  return (
    <div className="web-app">
      <aside className="sidebar">
        <div className="sidebar-logo"><Logo /></div>
        <nav>
          {nav.map(([href, label, icon]) => (
            <Link key={href} href={href} className={active === href ? "side-link active" : "side-link"}>
              <span>{icon}</span>{label}
            </Link>
          ))}
        </nav>
        <div className="help-card">Precisa de ajuda?<br/><b>Central EloCircular</b></div>
      </aside>
      <section className="web-content">
        <header className="web-topbar">
          <div>
            <span className="web-kicker">EloCircular • Plataforma web</span>
          </div>
          <div className="user-chip"><span className="avatar">AC</span><div><b>Ana Carolina Martins</b><small>Empresa TechSol</small></div></div>
        </header>
        {children}
      </section>
    </div>
  );
}
