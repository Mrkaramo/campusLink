import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const teacher = await prisma.teacher.create({
      data: {
        id: `T${Math.random().toString(36).substr(2, 6)}`,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: new Date(data.birthday),
        subjects: {
          connect: data.subjects.map((name: string) => ({ name })),
        },
      },
    });

    return NextResponse.json(teacher);
  } catch (error) {
    console.error("Erreur lors de la création du professeur:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du professeur" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const teachers = await prisma.teacher.findMany({
      include: {
        subjects: true,
        classes: true,
      },
    });

    return NextResponse.json(teachers);
  } catch (error) {
    console.error("Erreur lors de la récupération des professeurs:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des professeurs" },
      { status: 500 }
    );
  }
}