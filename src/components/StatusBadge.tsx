import { StatusColeta } from "@/lib/types";

const labels: Record<StatusColeta | "boa" | "media" | "baixa", string> = {
  solicitada: "Solicitada",
  agendada: "Agendada",
  em_rota: "Em rota",
  em_andamento: "Em andamento",
  coletada: "Coletada",
  em_triagem: "Em triagem",
  concluida: "Concluída",
  cancelada: "Cancelada",
  boa: "Boa",
  media: "Média",
  baixa: "Baixa"
};

export function StatusBadge({ status }: { status: StatusColeta | "boa" | "media" | "baixa" }) {
  return <span className={`status status-${status}`}>{labels[status]}</span>;
}
