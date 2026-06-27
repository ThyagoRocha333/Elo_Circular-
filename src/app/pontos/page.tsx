import { WebShell } from "@/components/WebShell";
import { pontos } from "@/lib/mock-data";

export default function PontosPage() {
  return (
    <WebShell active="/pontos">
      <main className="web-grid two-col">
        <section className="card">
          <h1 style={{fontSize:32, marginTop:0}}>Pontos de coleta</h1>
          <div className="grid" style={{marginTop:20}}>
            {pontos.map((p) => <article key={p.nome} className="doc-card"><b>📍 {p.nome}</b><p>{p.endereco}<br/>{p.bairro}, Fortaleza - CE</p></article>)}
          </div>
          <button className="btn btn-primary" style={{marginTop:18}}>Adicionar ponto de coleta</button>
        </section>
        <section className="card">
          <h3>Mapa dos pontos ativos</h3>
          <div className="map-card" style={{height:500, marginTop:18}}><span className="map-pin pin-a">1</span><span className="map-pin blue pin-b">2</span><span className="map-pin pin-c">3</span><span className="map-pin blue pin-d">4</span></div>
        </section>
      </main>
    </WebShell>
  );
}
