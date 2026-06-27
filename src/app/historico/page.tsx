import { WebShell } from "@/components/WebShell";
import { StatusBadge } from "@/components/StatusBadge";
import { coletas } from "@/lib/mock-data";

export default function HistoricoPage() {
  return (
    <WebShell active="/historico">
      <main className="web-grid">
        <section className="section-head" style={{marginBottom:0}}>
          <div><h1 style={{fontSize:34, margin:"0 0 8px"}}>Histórico e documentos</h1><p className="lead" style={{fontSize:16, margin:0}}>Protocolos, declarações e relatórios de impacto disponíveis.</p></div>
          <div style={{display:"flex", gap:10}}><button className="btn btn-ghost">Filtros</button><button className="btn btn-secondary">Exportar</button></div>
        </section>
        <section className="card">
          <table className="table">
            <thead><tr><th>Protocolo</th><th>Data</th><th>Tipo de resíduo</th><th>Peso</th><th>Status</th><th>Documentos</th></tr></thead>
            <tbody>{coletas.map((c) => <tr key={c.id}><td>{c.protocolo}</td><td>{c.data}</td><td>{c.tipoResiduo}</td><td>{c.pesoKg} kg</td><td><StatusBadge status={c.status === "em_rota" ? "em_rota" : "concluida"} /></td><td>📄 📥</td></tr>)}</tbody>
          </table>
        </section>
        <section className="web-grid three-col">
          <article className="doc-card"><div className="doc-icon">▤</div><h3>Declaração de coleta</h3><p>Documento que comprova a coleta e destinação correta dos resíduos.</p><button className="btn btn-secondary">Baixar</button></article>
          <article className="doc-card"><div className="doc-icon">✓</div><h3>Certificado de destinação</h3><p>Certificado de destinação ambientalmente adequada dos resíduos eletrônicos.</p><button className="btn btn-secondary">Baixar</button></article>
          <article className="doc-card"><div className="doc-icon">◌</div><h3>Relatório de impacto</h3><p>Resumo dos impactos gerados a partir das suas doações.</p><button className="btn btn-secondary">Baixar</button></article>
        </section>
      </main>
    </WebShell>
  );
}
