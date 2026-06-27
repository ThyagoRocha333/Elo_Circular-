import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MetricCard } from "@/components/MetricCard";
import { impacto } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <>
      <header className="public-header">
        <div className="container inner">
          <Logo />
          <nav className="public-nav">
            <Link href="/plataforma">Plataforma</Link>
            <Link href="/coletor">App do coletor</Link>
            <Link href="/solicitar-coleta">Solicitar coleta</Link>
            <Link href="#como-funciona">Como funciona</Link>
          </nav>
          <div className="public-actions">
            <Link className="btn btn-secondary" href="/coletor">Ver app</Link>
            <Link className="btn btn-primary" href="/plataforma">Abrir MVP</Link>
          </div>
        </div>
      </header>

      <main>
        <section className="container hero">
          <div>
            <span className="eyebrow">Do descarte à aprendizagem</span>
            <h1>Transforme lixo eletrônico em coleta organizada, educação e impacto real.</h1>
            <p className="lead">
              O EloCircular conecta empresas, escolas, pontos de coleta, coletores, destinadores e educadores em um ciclo rastreável para solicitar, coletar, triar, declarar e medir o impacto dos resíduos eletrônicos.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/solicitar-coleta">Solicitar coleta</Link>
              <Link className="btn btn-secondary" href="/pontos">Encontrar ponto de coleta</Link>
            </div>
            <div className="metric-strip">
              <div className="mini-metric"><strong>{impacto.kgColetados.toLocaleString("pt-BR")} kg</strong><span>coletados</span></div>
              <div className="mini-metric"><strong>{impacto.coletasAgendadas}</strong><span>coletas agendadas</span></div>
              <div className="mini-metric"><strong>{impacto.pontosAtivos}</strong><span>pontos ativos</span></div>
              <div className="mini-metric"><strong>{impacto.alunosImpactados}</strong><span>alunos impactados</span></div>
            </div>
          </div>

          <div className="product-board">
            <div className="browser-card">
              <div className="browser-top"><span className="browser-dot"/><span className="browser-dot"/><span className="browser-dot"/><b style={{marginLeft:8}}>Dashboard geral</b></div>
              <div className="preview-grid">
                <div className="preview-kpis">
                  <MetricCard title="Coletas agendadas" value="28" hint="+18%" icon="▣" />
                  <MetricCard title="Resíduos coletados" value="3.240 kg" hint="+30%" icon="♻" />
                  <MetricCard title="Reaproveitamento" value="82%" hint="+6 pp" icon="✓" />
                  <MetricCard title="Certificados" value="14" hint="emitidos" icon="▤" />
                  <div className="line-chart" style={{gridColumn:"1 / -1"}} />
                </div>
                <div>
                  <div className="map-card"><div className="route-visual"/><span className="map-pin pin-a">1</span><span className="map-pin blue pin-b">2</span><span className="map-pin pin-c">3</span><span className="map-pin blue pin-d">4</span></div>
                  <div className="doc-card" style={{marginTop:12}}><b>Rota em andamento</b><p>Lucas Silveira • Van EloCircular<br/>68 km • 6h40 • 12 paradas</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container section" id="como-funciona">
          <div className="section-head">
            <div><span className="eyebrow">Fluxo oficial</span><h2>Do descarte à aprendizagem</h2></div>
            <p className="lead" style={{maxWidth:520}}>O MVP foi construído para demonstrar a jornada completa, da solicitação até o impacto.</p>
          </div>
          <div className="grid grid-4">
            {[
              ["1", "Solicitar", "Empresa ou escola informa o que deseja doar e recebe protocolo."],
              ["2", "Coletar", "Coletor recebe rota otimizada e registra retirada no app."],
              ["3", "Triar", "Itens são classificados por risco, reuso, reciclagem ou descarte seguro."],
              ["4", "Impactar", "Declaração digital e painel mostram o resultado ambiental e educacional."]
            ].map(([n,t,d]) => <article className="card step-card" key={t}><span className="step-num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </section>

        <section className="container section">
          <div className="section-head"><h2>Visual oficial do produto</h2><Link className="btn btn-primary" href="/plataforma">Entrar na plataforma</Link></div>
          <div className="grid grid-3">
            <article className="card feature-card"><div className="icon">▦</div><h3>Plataforma web</h3><p>Dashboard claro para empresas, escolas e parceiros acompanharem coletas, documentos, pontos e impacto.</p></article>
            <article className="card feature-card"><div className="icon">▧</div><h3>App do coletor</h3><p>Interface dark, objetiva e de campo para agenda do dia, mapa, checklist, protocolo, assinatura e conclusão.</p></article>
            <article className="card feature-card"><div className="icon">✓</div><h3>Governança</h3><p>Fluxo com protocolo, evidência, status, triagem, declaração digital e rastreabilidade.</p></article>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container"><h3>EloCircular</h3><p>Tecnologia que transforma. Cuidado que circula.</p></div></footer>
    </>
  );
}
