import { NextResponse } from "next/server";
import { coletas } from "@/lib/mock-data";
export async function GET() { return NextResponse.json(coletas); }
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ id: "nova-coleta", protocolo: "CO-2025-07-02-0001", status: "solicitada", ...body }, { status: 201 });
}
