import { WebShell } from "@/components/WebShell";
import { MetricCard } from "@/components/MetricCard";
import { impacto } from "@/lib/mock-data";

export default function ImpactoPage() {
  return (
    <WebShell active="/impacto">
      <main className="web-grid">
        <section><h1 style={{fontSize:34, margin:"0 0 8px"}}>Impacto gerado</h1><p className="lead" style={{fontSize:16, margin:0}}>Indicadores ambientais, sociais e operacionais do ciclo EloCircular.</p></section>
        <section className="web-grid kpi-row">
          <MetricCard title="Resíduos coletados" value={`${impacto.kgColetados.toLocaleString("pt-BR")} kg`} icon="♻" />
          <MetricCard title="Emissões de CO₂ evitadas" value={`${impacto.co2EvitadoTon.toLocaleString("pt-BR")} ton`} icon="△" />
          <MetricCard title="Itens reaproveitados" value={impacto.itensReaproveitados.toLocaleString("pt-BR")} icon="✓" />
          <MetricCard title="Alunos impactados" value={impacto.alunosImpactados.toLocaleString("pt-BR")} icon="◎" />
        </section>
        <section className="web-grid two-col">
          <article className="card"><div className="section-head" style={{marginBottom:8}}><h3>Evolução do impacto</h3><span className="status status-concluida">Maio/2025 • 320 kg</span></div><div className="line-chart" style={{height:260}} /></article>
          <article className="card"><h3>Distribuição do impacto</h3><div style={{display:"grid", placeItems:"center", marginTop:20}}><div style={{width:230, height:230, borderRadius:"999px", background:"conic-gradient(#16a34a 0 82%, #2563eb 82% 97%, #f97316 97% 100%)", display:"grid", placeItems:"center"}}><div style={{width:130, height:130, borderRadius:"999px", background:"white", display:"grid", placeItems:"center", fontSize:34, fontWeight:900, color:"#15803d"}}>82%</div></div></div><p><b>Reutilização:</b> 2.657 kg<br/><b>Reciclagem:</b> 486 kg<br/><b>Recuperação energética:</b> 97 kg</p></article>
        </section>
      </main>
    </WebShell>
  );
}
