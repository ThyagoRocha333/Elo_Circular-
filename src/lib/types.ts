export type StatusColeta =
  | "solicitada"
  | "agendada"
  | "em_rota"
  | "em_andamento"
  | "coletada"
  | "em_triagem"
  | "concluida"
  | "cancelada";

export type TipoResiduo =
  | "Equipamentos de TI"
  | "Celulares e tablets"
  | "Baterias e pilhas"
  | "Cabos e carregadores"
  | "Componentes eletrônicos"
  | "Outros eletrônicos";

export interface Coleta {
  id: string;
  protocolo: string;
  doador: string;
  contato: string;
  email: string;
  telefone: string;
  endereco: string;
  bairro: string;
  cidade: string;
  tipoResiduo: TipoResiduo;
  descricao: string;
  pesoKg: number;
  quantidade: number;
  status: StatusColeta;
  data: string;
  janela: string;
  coletor: string;
  veiculo: string;
}

export interface Rota {
  id: string;
  nome: string;
  coletor: string;
  veiculo: string;
  distanciaKm: number;
  tempoMin: number;
  consumoKmLitro: number;
  precoCombustivel: number;
  paradas: number;
  status: "planejada" | "em_andamento" | "finalizada";
}

export interface Impacto {
  kgColetados: number;
  coletasAgendadas: number;
  certificadosEmitidos: number;
  taxaReaproveitamento: number;
  itensReaproveitados: number;
  alunosImpactados: number;
  co2EvitadoTon: number;
  pontosAtivos: number;
}
