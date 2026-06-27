import Link from "next/link";
import { WebShell } from "@/components/WebShell";
import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { coletas, impacto, pontos } from "@/lib/mock-data";

export default function PlataformaPage() {
  return (
    <WebShell active="/plataforma">
      <main className="web-grid">
        <section>
          <h1 style={{fontSize:34, margin:"0 0 8px"}}>Olá, Ana Carolina! 👋</h1>
          <p className="lead" style={{fontSize:16, margin:0}}>Veja o desempenho das suas ações, coletas e documentos.</p>
        </section>

        <section className="web-grid kpi-row">
          <MetricCard title="Coletas agendadas" value={String(impacto.coletasAgendadas)} hint="+18% vs. período anterior" icon="▣" />
          <MetricCard title="Resíduos coletados" value={`${impacto.kgColetados.toLocaleString("pt-BR")} kg`} hint="+30% vs. período anterior" icon="♻" />
          <MetricCard title="Taxa de reaproveitamento" value={`${impacto.taxaReaproveitamento}%`} hint="+6 pp vs. período anterior" icon="✓" />
          <MetricCard title="Certificados emitidos" value={String(impacto.certificadosEmitidos)} hint="+27% vs. período anterior" icon="▤" />
        </section>

        <section className="web-grid two-col">
          <article className="card">
            <div className="section-head" style={{marginBottom:10}}><h3>Resíduos coletados (kg)</h3><button className="btn btn-ghost">Últimos 12 meses</button></div>
            <div className="line-chart" />
          </article>
          <article className="card">
            <h3>Por tipo de resíduo</h3>
            <div style={{display:"grid", gridTemplateColumns:"170px 1fr", gap:22, alignItems:"center", marginTop:20}}>
              <div style={{width:160, height:160, borderRadius:"999px", background:"conic-gradient(#16a34a 0 60%, #2563eb 60% 80%, #f97316 80% 90%, #a855f7 90% 100%)", display:"grid", placeItems:"center"}}><div style={{width:92, height:92, borderRadius:"999px", background:"white"}} /></div>
              <div className="grid" style={{gap:10}}>
                <p><b style={{color:"#16a34a"}}>●</b> Equip. de TI — 60%</p>
                <p><b style={{color:"#2563eb"}}>●</b> Celulares — 20%</p>
                <p><b style={{color:"#f97316"}}>●</b> Baterias — 10%</p>
                <p><b style={{color:"#a855f7"}}>●</b> Outros — 10%</p>
              </div>
            </div>
          </article>
        </section>

        <section className="web-grid two-col">
          <article className="card">
            <div className="section-head" style={{marginBottom:8}}><h3>Coletas em andamento</h3><Link href="/acompanhar">Ver todas</Link></div>
            <table className="table">
              <thead><tr><th>Protocolo</th><th>Doador</th><th>Bairro</th><th>Tipo</th><th>Status</th></tr></thead>
              <tbody>
                {coletas.slice(0,4).map((c) => (
                  <tr key={c.id}><td>{c.protocolo}</td><td>{c.doador}</td><td>{c.bairro}</td><td>{c.tipoResiduo}</td><td><StatusBadge status={c.status} /></td></tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="card">
            <div className="section-head" style={{marginBottom:8}}><h3>Próximas coletas</h3><Link href="/coletor">Abrir app do coletor</Link></div>
            <div className="grid">
              {coletas.slice(0,3).map((c) => <div className="doc-card" key={c.id}><b>{c.data} • {c.janela}</b><p>{c.doador}<br/>{c.tipoResiduo}</p></div>)}
            </div>
          </article>
        </section>

        <section className="web-grid three-col">
          <article className="card"><h3>Pontos de coleta</h3><div className="map-card" style={{margin:"16px 0"}}><span className="map-pin pin-a">1</span><span className="map-pin blue pin-b">2</span><span className="map-pin pin-c">3</span><span className="map-pin blue pin-d">4</span></div><p>{pontos.length} pontos ativos em Fortaleza.</p></article>
          <article className="card"><h3>Atividades recentes</h3><div className="grid" style={{marginTop:16}}><p>✅ Certificado emitido<br/><b>CO-2025-05-16-0012</b></p><p>📄 Declaração baixada<br/><b>CO-2025-05-14-0008</b></p><p>🚚 Coleta concluída<br/><b>CO-2025-05-05-0001</b></p></div></article>
          <article className="card"><h3>Perfil da organização</h3><p><b>TechSol Informática</b><br/>CNPJ 12.345.678/0001-90</p><p>Responsável: Ana Carolina Martins<br/>Segmento: Tecnologia da Informação</p><button className="btn btn-primary">Editar perfil</button></article>
        </section>
      </main>
    </WebShell>
  );
}
