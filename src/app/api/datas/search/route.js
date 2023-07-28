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
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("query"));
  const query = searchParams.get("query");

  const filtereddatas = datas.filter((data) => {
    return data.nama.toLowerCase().includes(query.toLowerCase());
  });

  return NextResponse.json(filtereddatas);
}
