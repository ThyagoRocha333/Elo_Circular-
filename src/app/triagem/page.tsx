import { WebShell } from "@/components/WebShell";

export default function TriagemPage() {
  return (
    <WebShell active="/plataforma">
      <main className="web-grid two-col">
        <section className="card">
          <h1 style={{fontSize:34, marginTop:0}}>Triagem responsável</h1>
          <p>Classifique os resíduos coletados por estado, risco e destino.</p>
          <div className="doc-card"><b>Protocolo</b><h2 style={{fontSize:26}}>CO-2025-05-21-0007</h2><p>TechSol Informática • 118 kg estimados</p></div>
          <div className="form-grid" style={{marginTop:18}}>
            <div className="field"><label>Tipo confirmado</label><select><option>Equipamentos de TI</option><option>Componentes eletrônicos</option></select></div>
            <div className="field"><label>Estado</label><select><option>Defeito parcial</option><option>Funcionando</option><option>Danificado</option></select></div>
            <div className="field"><label>Nível de risco</label><select><option>Baixo</option><option>Médio</option><option>Alto</option></select></div>
            <div className="field"><label>Destino</label><select><option>Oficina educacional</option><option>Reuso direto</option><option>Reciclagem</option><option>Descarte especializado</option></select></div>
            <div className="field" style={{gridColumn:"1 / -1"}}><label>Uso educacional</label><textarea rows={4} defaultValue="Aula de manutenção, identificação de componentes e robótica básica." /></div>
          </div>
          <button className="btn btn-primary" style={{marginTop:18}}>Salvar triagem</button>
        </section>
        <section className="card">
          <h3>Sugestão da IA</h3>
          <div className="info-box"><b>IA apenas sugere. Validação humana obrigatória.</b></div>
          <div className="grid" style={{marginTop:18}}>
            <div className="doc-card"><b>Classificação</b><p>Computadores e periféricos</p></div>
            <div className="doc-card"><b>Risco</b><p>Baixo, com atenção a baterias e telas quebradas.</p></div>
            <div className="doc-card"><b>Destino sugerido</b><p>Oficina educacional + reciclagem dos itens sem reuso.</p></div>
            <div className="doc-card"><b>Validação</b><p>☑ Validado por responsável técnico</p></div>
          </div>
        </section>
      </main>
    </WebShell>
  );
}
