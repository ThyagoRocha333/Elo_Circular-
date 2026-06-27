"use client";

import { useMemo, useState } from "react";
import { Logo } from "@/components/Logo";
import { coletas, rotaAtual } from "@/lib/mock-data";
import { Coleta, StatusColeta } from "@/lib/types";

type Tab = "agenda" | "rota" | "coletas" | "avisos" | "perfil";
type FlowStep = "detalhe" | "checklist" | "protocolo" | "itens" | "riscos" | "assinatura" | "concluida";

const checklist = [
  "EPIs obrigatorios conferidos",
  "Veiculo posicionado com seguranca",
  "Endereco e contato confirmados",
  "Area de carga liberada",
  "Equipamentos desligados",
  "Lacres, sacos e etiquetas disponiveis"
];

const riskOptions = ["Baterias ou power banks", "Telas quebradas", "Risco quimico", "Objeto perfurante"];

const initialItems = [
  { name: "Desktop", qty: 8 },
  { name: "Monitor", qty: 12 },
  { name: "Notebook", qty: 5 },
  { name: "Impressora", qty: 2 }
];

function StatusBar() {
  return (
    <div className="collector-statusbar">
      <span>9:41</span>
      <span>LTE 100%</span>
    </div>
  );
}

function AppButton({
  children,
  variant = "secondary",
  onClick,
  disabled
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button className={`collector-btn ${variant}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function BottomNav({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "agenda", label: "Agenda", icon: "01" },
    { id: "rota", label: "Rota", icon: "02" },
    { id: "coletas", label: "Coletas", icon: "03" },
    { id: "avisos", label: "Avisos", icon: "04" },
    { id: "perfil", label: "Perfil", icon: "05" }
  ];

  return (
    <nav className="collector-nav" aria-label="Navegacao do app do coletor">
      {tabs.map((tab) => (
        <button key={tab.id} className={active === tab.id ? "active" : ""} onClick={() => onChange(tab.id)}>
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="collector-app-header">
      <div>
        <p>App do Coletor</p>
        <h1>{title}</h1>
        {subtitle ? <span>{subtitle}</span> : null}
      </div>
      <div className="collector-avatar">LS</div>
    </header>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="collector-mini-metric">
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}

function ColetaCard({
  coleta,
  active,
  status,
  onOpen
}: {
  coleta: Coleta;
  active?: boolean;
  status: StatusColeta;
  onOpen: () => void;
}) {
  return (
    <button className={`collector-stop ${active ? "active" : ""}`} onClick={onOpen}>
      <span className={`collector-dot status-${status}`} />
      <div>
        <b>{coleta.doador}</b>
        <small>{coleta.janela} - {coleta.bairro}</small>
        <small>{coleta.quantidade} itens - {coleta.pesoKg} kg</small>
      </div>
      <strong>{status === "concluida" ? "OK" : status === "em_andamento" ? "Em coleta" : "Abrir"}</strong>
    </button>
  );
}

function RouteMap() {
  return (
    <div className="collector-map" aria-label="Mapa simulado da rota">
      <div className="collector-map-path" />
      <span className="collector-map-node node-a">1</span>
      <span className="collector-map-node node-b">2</span>
      <span className="collector-map-node node-c">3</span>
      <span className="collector-map-node node-d">4</span>
    </div>
  );
}

export default function ColetorPage() {
  const [signedIn, setSignedIn] = useState(false);
  const [tab, setTab] = useState<Tab>("agenda");
  const [routeStarted, setRouteStarted] = useState(false);
  const [selectedId, setSelectedId] = useState(coletas[0]?.id ?? "");
  const [flowStep, setFlowStep] = useState<FlowStep>("detalhe");
  const [checked, setChecked] = useState<boolean[]>(() => checklist.map(() => false));
  const [protocol, setProtocol] = useState(coletas[0]?.protocolo ?? "");
  const [items, setItems] = useState(initialItems);
  const [risks, setRisks] = useState<string[]>([]);
  const [signature, setSignature] = useState("");
  const [statusById, setStatusById] = useState<Record<string, StatusColeta>>({
    [coletas[0]?.id ?? ""]: "em_rota"
  });

  const selected = useMemo(() => coletas.find((coleta) => coleta.id === selectedId) ?? coletas[0], [selectedId]);
  const selectedStatus = statusById[selected.id] ?? selected.status;
  const completedCount = coletas.filter((coleta) => (statusById[coleta.id] ?? coleta.status) === "concluida").length;
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  const checklistDone = checked.every(Boolean);
  const protocolOk = protocol.trim().toUpperCase() === selected.protocolo;

  function openColeta(id: string) {
    setSelectedId(id);
    setFlowStep("detalhe");
    setProtocol(coletas.find((coleta) => coleta.id === id)?.protocolo ?? "");
    setTab("coletas");
  }

  function startCollection() {
    setStatusById((current) => ({ ...current, [selected.id]: "em_andamento" }));
    setFlowStep("checklist");
    setTab("coletas");
  }

  function finishCollection() {
    setStatusById((current) => ({ ...current, [selected.id]: "concluida" }));
    setFlowStep("concluida");
  }

  function adjustItem(index: number, delta: number) {
    setItems((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    );
  }

  function toggleRisk(risk: string) {
    setRisks((current) => current.includes(risk) ? current.filter((item) => item !== risk) : [...current, risk]);
  }

  function renderLogin() {
    return (
      <div className="collector-login">
        <Logo dark />
        <div>
          <h1>Coletor EloCircular</h1>
          <p>Agenda, rota, retirada, assinatura e comprovante em um fluxo de campo.</p>
        </div>
        <div className="collector-login-panel">
          <label>
            Codigo do coletor
            <input value="LUCAS.SILVEIRA" readOnly />
          </label>
          <label>
            Senha
            <input type="password" value="123456" readOnly />
          </label>
          <AppButton variant="primary" onClick={() => setSignedIn(true)}>Entrar no app</AppButton>
        </div>
      </div>
    );
  }

  function renderAgenda() {
    const pending = coletas.length - completedCount;
    const progress = Math.round((completedCount / coletas.length) * 100);

    return (
      <>
        <Header title="Agenda de hoje" subtitle="Sexta-feira, 26 de junho" />
        <section className="collector-summary">
          <MiniMetric label="Coletas" value={String(coletas.length)} />
          <MiniMetric label="Pendentes" value={String(pending)} />
          <MiniMetric label="Concluidas" value={String(completedCount)} />
        </section>
        <section className="collector-panel">
          <div className="collector-panel-head">
            <div>
              <b>Progresso da rota</b>
              <span>{progress}% concluido</span>
            </div>
            <strong>{rotaAtual.distanciaKm} km</strong>
          </div>
          <div className="collector-progress"><span style={{ width: `${progress}%` }} /></div>
        </section>
        <section className="collector-panel">
          <div className="collector-panel-head">
            <div>
              <b>Proxima coleta</b>
              <span>{selected.janela} - {selected.bairro}</span>
            </div>
            <strong>{selectedStatus === "concluida" ? "OK" : "Agora"}</strong>
          </div>
          <h2>{selected.doador}</h2>
          <p>{selected.endereco}, {selected.cidade}</p>
          <div className="collector-actions">
            <AppButton variant="primary" onClick={() => { setRouteStarted(true); setTab("rota"); }}>Iniciar rota</AppButton>
            <AppButton onClick={() => openColeta(selected.id)}>Ver coleta</AppButton>
          </div>
        </section>
        <div className="collector-list">
          {coletas.map((coleta) => (
            <ColetaCard
              key={coleta.id}
              coleta={coleta}
              active={selected.id === coleta.id}
              status={statusById[coleta.id] ?? coleta.status}
              onOpen={() => openColeta(coleta.id)}
            />
          ))}
        </div>
      </>
    );
  }

  function renderRota() {
    return (
      <>
        <Header title={routeStarted ? "Rota em andamento" : "Rota otimizada"} subtitle={rotaAtual.nome} />
        <RouteMap />
        <section className="collector-summary">
          <MiniMetric label="Tempo" value={`${Math.round(rotaAtual.tempoMin / 60)}h${rotaAtual.tempoMin % 60}`} />
          <MiniMetric label="Paradas" value={String(rotaAtual.paradas)} />
          <MiniMetric label="Veiculo" value="Van" />
        </section>
        <section className="collector-panel">
          <div className="collector-panel-head">
            <div>
              <b>Destino atual</b>
              <span>{selected.endereco}</span>
            </div>
            <strong>1,2 km</strong>
          </div>
          <p>{selected.doador} - {selected.contato}</p>
          <div className="collector-actions">
            <AppButton variant="primary" onClick={() => openColeta(selected.id)}>Cheguei</AppButton>
            <AppButton>Maps</AppButton>
          </div>
        </section>
      </>
    );
  }

  function renderChecklist() {
    return (
      <section className="collector-panel">
        <h2>Checklist de seguranca</h2>
        <p>Confirme os itens antes de iniciar a retirada.</p>
        <div className="collector-checklist">
          {checklist.map((item, index) => (
            <button key={item} className={checked[index] ? "checked" : ""} onClick={() => setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))}>
              <span>{checked[index] ? "OK" : ""}</span>
              {item}
            </button>
          ))}
        </div>
        <AppButton variant="primary" onClick={() => setFlowStep("protocolo")} disabled={!checklistDone}>Continuar</AppButton>
      </section>
    );
  }

  function renderProtocol() {
    return (
      <section className="collector-panel">
        <h2>Validar protocolo</h2>
        <p>Escaneie o QR Code ou confirme o codigo manualmente.</p>
        <div className="collector-scanner"><div /></div>
        <label className="collector-field">
          Protocolo
          <input value={protocol} onChange={(event) => setProtocol(event.target.value.toUpperCase())} />
        </label>
        <AppButton variant="primary" onClick={() => setFlowStep("itens")} disabled={!protocolOk}>Protocolo validado</AppButton>
      </section>
    );
  }

  function renderItems() {
    return (
      <section className="collector-panel">
        <div className="collector-panel-head">
          <div>
            <b>Registrar retirada</b>
            <span>{totalItems} itens informados</span>
          </div>
          <strong>{selected.pesoKg} kg</strong>
        </div>
        <div className="collector-item-list">
          {items.map((item, index) => (
            <div className="collector-item" key={item.name}>
              <span />
              <b>{item.name}</b>
              <div>
                <button onClick={() => adjustItem(index, -1)}>-</button>
                <strong>{item.qty}</strong>
                <button onClick={() => adjustItem(index, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <AppButton variant="primary" onClick={() => setFlowStep("riscos")}>Continuar</AppButton>
      </section>
    );
  }

  function renderRisks() {
    return (
      <section className="collector-panel">
        <h2>Triagem rapida</h2>
        <p>Marque riscos encontrados antes de carregar o veiculo.</p>
        <div className="collector-risk-grid">
          {riskOptions.map((risk) => (
            <button key={risk} className={risks.includes(risk) ? "active" : ""} onClick={() => toggleRisk(risk)}>
              {risk}
            </button>
          ))}
        </div>
        <textarea className="collector-notes" placeholder="Observacoes da retirada" />
        <AppButton variant="primary" onClick={() => setFlowStep("assinatura")}>Continuar</AppButton>
      </section>
    );
  }

  function renderSignature() {
    return (
      <section className="collector-panel">
        <h2>Comprovante</h2>
        <div className="collector-receipt">
          <span>Protocolo</span><b>{selected.protocolo}</b>
          <span>Doador</span><b>{selected.doador}</b>
          <span>Itens</span><b>{totalItems} unidades</b>
          <span>Peso</span><b>{selected.pesoKg} kg</b>
          <span>Riscos</span><b>{risks.length ? risks.join(", ") : "Sem risco informado"}</b>
        </div>
        <label className="collector-field">
          Nome do responsavel
          <input value={signature} onChange={(event) => setSignature(event.target.value)} placeholder={selected.contato} />
        </label>
        <div className="collector-signature">{signature || selected.contato}</div>
        <AppButton variant="primary" onClick={finishCollection} disabled={!signature.trim()}>Finalizar coleta</AppButton>
      </section>
    );
  }

  function renderDone() {
    return (
      <section className="collector-done">
        <div>OK</div>
        <h2>Coleta concluida</h2>
        <p>{selected.doador} recebeu comprovante digital do protocolo {selected.protocolo}.</p>
        <AppButton variant="primary" onClick={() => setTab("agenda")}>Voltar para agenda</AppButton>
        <AppButton onClick={() => {
          const next = coletas.find((coleta) => (statusById[coleta.id] ?? coleta.status) !== "concluida");
          if (next) openColeta(next.id);
        }}>Proxima coleta</AppButton>
      </section>
    );
  }

  function renderColetaFlow() {
    return (
      <>
        <Header title="Coleta em campo" subtitle={`${selected.protocolo} - ${selectedStatus}`} />
        {flowStep === "detalhe" ? (
          <section className="collector-panel">
            <div className="collector-panel-head">
              <div>
                <b>{selected.doador}</b>
                <span>{selected.tipoResiduo}</span>
              </div>
              <strong>{selected.janela}</strong>
            </div>
            <p>{selected.descricao}</p>
            <div className="collector-receipt compact">
              <span>Contato</span><b>{selected.contato}</b>
              <span>Telefone</span><b>{selected.telefone}</b>
              <span>Endereco</span><b>{selected.endereco}, {selected.bairro}</b>
              <span>Volume</span><b>{selected.quantidade} itens - {selected.pesoKg} kg</b>
            </div>
            <div className="collector-actions">
              <AppButton variant="primary" onClick={startCollection}>Iniciar coleta</AppButton>
              <AppButton onClick={() => setTab("rota")}>Ver rota</AppButton>
            </div>
          </section>
        ) : null}
        {flowStep === "checklist" ? renderChecklist() : null}
        {flowStep === "protocolo" ? renderProtocol() : null}
        {flowStep === "itens" ? renderItems() : null}
        {flowStep === "riscos" ? renderRisks() : null}
        {flowStep === "assinatura" ? renderSignature() : null}
        {flowStep === "concluida" ? renderDone() : null}
      </>
    );
  }

  function renderAvisos() {
    return (
      <>
        <Header title="Avisos" subtitle="Operacao em campo" />
        <section className="collector-panel alert">
          <b>Prioridade alta</b>
          <p>Coletas com baterias devem ser separadas em caixa de seguranca.</p>
        </section>
        <section className="collector-panel">
          <b>Sincronizacao</b>
          <p>Dados simulados sincronizados com a plataforma web para demonstracao.</p>
        </section>
      </>
    );
  }

  function renderPerfil() {
    return (
      <>
        <Header title="Perfil" subtitle="Lucas Silveira" />
        <section className="collector-profile">
          <div className="collector-avatar large">LS</div>
          <h2>Lucas Silveira</h2>
          <p>Coletor responsavel - Van EloCircular</p>
        </section>
        <section className="collector-summary">
          <MiniMetric label="Hoje" value={`${completedCount}/${coletas.length}`} />
          <MiniMetric label="Peso" value="492 kg" />
          <MiniMetric label="Nota" value="98%" />
        </section>
        <AppButton variant="danger" onClick={() => setSignedIn(false)}>Sair</AppButton>
      </>
    );
  }

  const content = tab === "agenda"
    ? renderAgenda()
    : tab === "rota"
      ? renderRota()
      : tab === "coletas"
        ? renderColetaFlow()
        : tab === "avisos"
          ? renderAvisos()
          : renderPerfil();

  return (
    <main className="collector-page">
      <section className="collector-shell">
        <aside className="collector-context">
          <Logo dark />
          <div>
            <h1>App do Coletor</h1>
            <p>Fluxo operacional para coleta de lixo eletronico: rota, checklist, protocolo, itens, riscos, assinatura e conclusao.</p>
          </div>
          <div className="collector-context-grid">
            <MiniMetric label="Rota" value={rotaAtual.id.replace("ROTA-", "")} />
            <MiniMetric label="Coletor" value="Lucas" />
          </div>
        </aside>
        <div className="collector-device">
          <StatusBar />
          <div className="collector-screen">
            {signedIn ? content : renderLogin()}
          </div>
          {signedIn ? <BottomNav active={tab} onChange={setTab} /> : null}
        </div>
      </section>
    </main>
  );
}
