import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true, name: "EloCircular", version: "2.0.0" });
}
