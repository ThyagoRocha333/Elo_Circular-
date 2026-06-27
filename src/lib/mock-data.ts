import { Coleta, Impacto, Rota } from "./types";

export const coletas: Coleta[] = [
  {
    id: "1",
    protocolo: "CO-2025-05-21-0007",
    doador: "TechSol Informática",
    contato: "Ana Carolina Martins",
    email: "ana.martins@techsol.com.br",
    telefone: "(85) 98765-4321",
    endereco: "Rua das Orquídeas, 420",
    bairro: "Messejana",
    cidade: "Fortaleza - CE",
    tipoResiduo: "Equipamentos de TI",
    descricao: "Computadores, servidores, monitores e periféricos.",
    pesoKg: 118,
    quantidade: 27,
    status: "em_rota",
    data: "21/05/2025",
    janela: "09:00 - 12:00",
    coletor: "Lucas Silveira",
    veiculo: "Van EloCircular"
  },
  {
    id: "2",
    protocolo: "CO-2025-05-16-0012",
    doador: "Colégio Horizonte",
    contato: "Paula Mendes",
    email: "paula@colegiohorizonte.edu.br",
    telefone: "(85) 98888-1100",
    endereco: "Av. Santos Dumont, 2104",
    bairro: "Aldeota",
    cidade: "Fortaleza - CE",
    tipoResiduo: "Celulares e tablets",
    descricao: "Tablets antigos, celulares quebrados e carregadores.",
    pesoKg: 43,
    quantidade: 35,
    status: "concluida",
    data: "16/05/2025",
    janela: "14:00 - 16:00",
    coletor: "Lucas Silveira",
    veiculo: "Van EloCircular"
  },
  {
    id: "3",
    protocolo: "CO-2025-05-14-0008",
    doador: "Unidade Alphaville",
    contato: "Rafael Costa",
    email: "rafael@alphaville.com",
    telefone: "(85) 97777-1212",
    endereco: "Av. Washington Soares, 1321",
    bairro: "Edson Queiroz",
    cidade: "Fortaleza - CE",
    tipoResiduo: "Baterias e pilhas",
    descricao: "Baterias, pilhas e nobreaks para destinação especializada.",
    pesoKg: 35,
    quantidade: 18,
    status: "concluida",
    data: "14/05/2025",
    janela: "10:00 - 11:30",
    coletor: "Lucas Silveira",
    veiculo: "Van EloCircular"
  },
  {
    id: "4",
    protocolo: "CO-2025-05-10-0003",
    doador: "Faculdade Inbec",
    contato: "Juliana Freire",
    email: "juliana@inbec.edu.br",
    telefone: "(85) 96666-3434",
    endereco: "Rua Tibúrcio Cavalcante, 900",
    bairro: "Meireles",
    cidade: "Fortaleza - CE",
    tipoResiduo: "Equipamentos de TI",
    descricao: "Laboratório antigo: CPUs, monitores e cabos.",
    pesoKg: 210,
    quantidade: 64,
    status: "concluida",
    data: "10/05/2025",
    janela: "08:00 - 10:00",
    coletor: "Lucas Silveira",
    veiculo: "Van EloCircular"
  },
  {
    id: "5",
    protocolo: "CO-2025-05-05-0001",
    doador: "Condomínio Solar das Dunas",
    contato: "Carlos Andrade",
    email: "sindico@solardasdunas.com",
    telefone: "(85) 95555-0101",
    endereco: "Av. Beira Mar, 5000",
    bairro: "Meireles",
    cidade: "Fortaleza - CE",
    tipoResiduo: "Componentes eletrônicos",
    descricao: "Cabos, roteadores, teclados, fontes e pequenos eletrônicos.",
    pesoKg: 86,
    quantidade: 72,
    status: "concluida",
    data: "05/05/2025",
    janela: "15:00 - 17:00",
    coletor: "Lucas Silveira",
    veiculo: "Van EloCircular"
  }
];

export const rotaAtual: Rota = {
  id: "ROTA-2025-0521",
  nome: "Rota Messejana + Aldeota + Centro",
  coletor: "Lucas Silveira",
  veiculo: "Van EloCircular",
  distanciaKm: 68,
  tempoMin: 400,
  consumoKmLitro: 10,
  precoCombustivel: 6,
  paradas: 12,
  status: "em_andamento"
};

export const impacto: Impacto = {
  kgColetados: 3240,
  coletasAgendadas: 28,
  certificadosEmitidos: 14,
  taxaReaproveitamento: 82,
  itensReaproveitados: 1842,
  alunosImpactados: 1560,
  co2EvitadoTon: 2.18,
  pontosAtivos: 12
};

export const pontos = [
  { nome: "Sede TechSol", endereco: "Rua das Orquídeas, 420", bairro: "Messejana" },
  { nome: "Unidade Alphaville", endereco: "Av. Washington Soares, 1321", bairro: "Edson Queiroz" },
  { nome: "Colégio Horizonte", endereco: "Av. Santos Dumont, 2104", bairro: "Aldeota" },
  { nome: "Ponto Comunitário Centro", endereco: "Rua Guilherme Rocha, 500", bairro: "Centro" }
];
