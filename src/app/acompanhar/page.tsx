import { WebShell } from "@/components/WebShell";
import { StatusBadge } from "@/components/StatusBadge";
import { coletas } from "@/lib/mock-data";

const coleta = coletas[0];

export default function AcompanharPage() {
  return (
    <WebShell active="/acompanhar">
      <main className="web-grid">
        <section className="section-head" style={{marginBottom:0}}>
          <div><h1 style={{fontSize:34, margin:"0 0 8px"}}>Coleta #{coleta.protocolo}</h1><StatusBadge status="em_andamento" /></div>
          <button className="btn btn-secondary">Precisa de ajuda?</button>
        </section>

        <section className="web-grid two-col">
          <article className="card">
            <h3>Status da coleta</h3>
            <div className="grid" style={{marginTop:18}}>
              {[
                ["Coleta solicitada", "19/05/2025 09:42"],
                ["Coleta agendada", "20/05/2025 10:15"],
                ["Em rota", "21/05/2025 09:30 • O coletor está a caminho"],
                ["Coleta iniciada", "Aguardando"],
                ["Coleta concluída", "Aguardando"]
              ].map(([t,d], i) => <div key={t} className="doc-card" style={{borderColor: i <= 2 ? "#bbf7d0" : undefined}}><b>{i <=2 ? "●" : "○"} {t}</b><p>{d}</p></div>)}
            </div>
          </article>
          <article className="card">
            <h3>Rota do coletor</h3>
            <div className="map-card" style={{margin:"18px 0"}}><div className="route-visual"/><span className="map-pin pin-a">1</span><span className="map-pin blue pin-b">2</span><span className="map-pin pin-c">3</span></div>
            <div className="web-grid two-col">
              <div className="doc-card"><b>Coletor</b><p>Lucas Silveira<br/>(85) 98765-4321</p></div>
              <div className="doc-card"><b>Veículo</b><p>Van EloCircular<br/>ELC-4321</p></div>
            </div>
          </article>
        </section>

        <section className="card">
          <h3>Detalhes da coleta</h3>
          <div className="web-grid three-col" style={{marginTop:18}}>
            <p><b>Endereço</b><br/>{coleta.endereco}<br/>{coleta.bairro}, {coleta.cidade}</p>
            <p><b>Horário agendado</b><br/>{coleta.data} • {coleta.janela}<br/>Estimativa: 09:50 - 10:15</p>
            <p><b>Tipo de resíduo</b><br/>{coleta.tipoResiduo}<br/>Peso estimado: {coleta.pesoKg} kg</p>
          </div>
        </section>
      </main>
    </WebShell>
  );
}
