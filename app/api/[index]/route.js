import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { index } = params;

  const data = {
    1: { message: "Index 1" },
    2: { message: "Index 2" },
    3: { message: "Index 3" },
  };

  if (data[index]) {
    return NextResponse.json(data[index]);
  } else {
    return NextResponse.json({ error: "Index not found" }, { status: 404 });
  }
}
