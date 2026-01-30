import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const services = await prisma.service.findMany();
  return NextResponse.json(services);
}

export async function POST(req: Request) {
  const body = await req.json();
  const service = await prisma.service.create({
    data: body,
  });
  return NextResponse.json(service);
}
