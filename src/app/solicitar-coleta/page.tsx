import { WebShell } from "@/components/WebShell";

const categorias = [
  ["▣", "Equipamentos de TI", "Desktops, notebooks, monitores, servidores, impressoras."],
  ["▥", "Celulares e tablets", "Smartphones, tablets e acessórios."],
  ["▢", "Baterias e pilhas", "Baterias, pilhas e nobreaks."],
  ["⌁", "Cabos e carregadores", "Cabos USB, fontes e carregadores."],
  ["⚙", "Componentes", "Placas, memórias, HDs, fontes."],
  ["◌", "Outros eletrônicos", "Eletrodomésticos e outros dispositivos."]
];

export default function SolicitarColetaPage() {
  return (
    <WebShell active="/solicitar-coleta">
      <main className="web-grid">
        <section>
          <h1 style={{fontSize:34, margin:"0 0 8px"}}>Solicitar coleta <span style={{color:"var(--slate-400)", fontSize:18}}>(passo a passo)</span></h1>
          <p className="lead" style={{fontSize:16, margin:0}}>Fluxo oficial para empresas, escolas e parceiros registrarem resíduos eletrônicos.</p>
        </section>

        <section className="card">
          <div className="stepper">
            <div className="stepper-item active"><span className="stepper-bullet">1</span>Tipo de resíduo</div>
            <div className="stepper-item"><span className="stepper-bullet">2</span>Quantidade</div>
            <div className="stepper-item"><span className="stepper-bullet">3</span>Endereço e data</div>
            <div className="stepper-item"><span className="stepper-bullet">4</span>Revisão</div>
          </div>
          <h3>Selecione o tipo de resíduo</h3>
          <p>Escolha os materiais que você deseja doar.</p>
          <div className="option-grid" style={{marginTop:18}}>
            {categorias.map(([icon, title, desc], i) => (
              <article key={title} className={i === 0 ? "option-card active" : "option-card"}>
                <div className="option-icon">{icon}</div>
                <div><b>{title}</b><p style={{margin:"4px 0 0", color:"var(--slate-600)", fontSize:13}}>{desc}</p></div>
              </article>
            ))}
          </div>
          <div className="info-box">Não sabe o que doar? Consulte nossa lista completa de itens aceitos antes de continuar.</div>
        </section>

        <section className="web-grid two-col">
          <article className="card">
            <h3>Dados da coleta</h3>
            <div className="form-grid" style={{marginTop:18}}>
              <div className="field"><label>Empresa / escola</label><input defaultValue="TechSol Informática" /></div>
              <div className="field"><label>Contato</label><input defaultValue="Ana Carolina Martins" /></div>
              <div className="field"><label>Telefone</label><input defaultValue="(85) 98765-4321" /></div>
              <div className="field"><label>E-mail</label><input defaultValue="ana.martins@techsol.com.br" /></div>
              <div className="field"><label>Volume estimado</label><input defaultValue="120 kg" /></div>
              <div className="field"><label>Data preferida</label><input defaultValue="21/05/2025" /></div>
              <div className="field" style={{gridColumn:"1 / -1"}}><label>Endereço</label><input defaultValue="Rua das Orquídeas, 420 — Messejana, Fortaleza - CE" /></div>
              <div className="field" style={{gridColumn:"1 / -1"}}><label>Observação</label><textarea rows={4} defaultValue="Equipamentos estão separados em uma sala no térreo. Há acesso para veículo próximo à entrada." /></div>
            </div>
          </article>
          <article className="card">
            <h3>Resumo</h3>
            <div className="doc-card" style={{marginTop:16}}>
              <b>Protocolo prévio</b><h2 style={{fontSize:28, marginTop:8}}>CO-2025-05-21-0007</h2><p>Será confirmado após o envio da solicitação.</p>
            </div>
            <div className="doc-card" style={{marginTop:14}}><b>Categoria</b><p>Equipamentos de TI</p><b>Destino esperado</b><p>Triagem para reuso, oficina educacional ou reciclagem.</p></div>
            <button className="btn btn-primary btn-block" style={{marginTop:16}}>Enviar solicitação</button>
          </article>
        </section>
      </main>
    </WebShell>
  );
}
