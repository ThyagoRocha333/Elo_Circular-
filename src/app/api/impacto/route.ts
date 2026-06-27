import { NextResponse } from "next/server";
import { impacto } from "@/lib/mock-data";
export async function GET() { return NextResponse.json(impacto); }
