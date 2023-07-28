import { NextResponse } from "next/server";

async function fetchData() {
  const response = await fetch("http://localhost:4000/listPekerja", {
    method: "GET",
  });

  const datas = await response.json();
  return datas;
}

export async function GET(request) {
  const datas = await fetchData();
  return NextResponse.json(datas);
}
