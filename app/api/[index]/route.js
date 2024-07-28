import { NextResponse } from "next/server";
const fs = require("fs");
const path = require("path");

export async function GET(req, { params }) {
  const { index } = params;

  const filePath = path.join(process.cwd(), "public", "data.json");

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContent);

    const item = data.find((item) => item.id === parseInt(index));

    if (item) {
      return NextResponse.json(item);
    } else {
      return NextResponse.json({ error: "Index not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Error reading data" }, { status: 500 });
  }
}
