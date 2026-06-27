export function litrosEstimados(distanciaKm: number, consumoKmLitro: number) {
  if (!consumoKmLitro) return 0;
  return distanciaKm / consumoKmLitro;
}

export function custoEstimado(distanciaKm: number, consumoKmLitro: number, precoCombustivel: number) {
  return litrosEstimados(distanciaKm, consumoKmLitro) * precoCombustivel;
}

export function custoPorColeta(custo: number, paradas: number) {
  if (!paradas) return 0;
  return custo / paradas;
}

export function kmPorColeta(distanciaKm: number, paradas: number) {
  if (!paradas) return 0;
  return distanciaKm / paradas;
}

export function eficiencia(kmPorParada: number) {
  if (kmPorParada <= 5) return "Boa";
  if (kmPorParada <= 15) return "Média";
  return "Baixa";
}

export function money(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}
