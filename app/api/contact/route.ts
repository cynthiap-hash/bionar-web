import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, interes, mensaje } = body;

    if (!nombre || !email || !interes || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const contenido = `
Nueva consulta desde la web Bionar

Nombre: ${nombre}
Email: ${email}
Interés: ${interes}
Mensaje: ${mensaje}
`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "bionar.contacto@gmail.com",
      subject: "Nueva consulta desde la web Bionar",
      text: contenido,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { error: "Error enviando correo" },
      { status: 500 }
    );
  }
}