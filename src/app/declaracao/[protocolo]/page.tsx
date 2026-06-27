import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function DeclaracaoPage({ params }: { params: { protocolo: string } }) {
  return (
    <main className="container section">
      <Logo />
      <article className="card" style={{marginTop:30, maxWidth:760}}>
        <span className="eyebrow">Declaração digital emitida</span>
        <h1 style={{fontSize:38}}>Declaração de coleta e destinação</h1>
        <p className="lead">Protocolo: <b>{params.protocolo}</b></p>
        <div className="web-grid two-col">
          <div><p><b>Doador</b><br/>TechSol Informática</p><p><b>Material</b><br/>Equipamentos de TI — 118 kg</p><p><b>Destino</b><br/>Reuso educacional, reciclagem e descarte seguro.</p></div>
          <div className="scan-box" style={{borderColor:"var(--slate-200)"}}><div className="fake-qr" /></div>
        </div>
        <p>Documento demonstrativo do MVP acadêmico EloCircular.</p>
        <Link className="btn btn-primary" href="/historico">Voltar aos documentos</Link>
      </article>
    </main>
  );
}
