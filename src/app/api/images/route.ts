import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get("http://localhost:8000/files");

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Erro ao buscar arquivos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar arquivos" },
      { status: 500 }
    );
  }
}
