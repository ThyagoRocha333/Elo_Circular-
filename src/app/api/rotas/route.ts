import { NextResponse } from "next/server";
import { rotaAtual } from "@/lib/mock-data";
import { custoEstimado, custoPorColeta, eficiencia, kmPorColeta, litrosEstimados } from "@/lib/calculations";
export async function GET() {
  const litros = litrosEstimados(rotaAtual.distanciaKm, rotaAtual.consumoKmLitro);
  const custo = custoEstimado(rotaAtual.distanciaKm, rotaAtual.consumoKmLitro, rotaAtual.precoCombustivel);
  const kmParada = kmPorColeta(rotaAtual.distanciaKm, rotaAtual.paradas);
  return NextResponse.json({ ...rotaAtual, litrosEstimados: litros, custoEstimado: custo, custoPorColeta: custoPorColeta(custo, rotaAtual.paradas), kmPorColeta: kmParada, eficiencia: eficiencia(kmParada) });
}
