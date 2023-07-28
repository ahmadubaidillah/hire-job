"use client";

import { useState, useEffect } from "react";
import Data from "../../../components/data";
import Search from "../../../components/search";
import Navbar from "../../../components/navbar3";
import Footer from "../../../components/footer";

export default function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      const response = await fetch("/api/datas");
      const datas = await response.json();
      console.log(datas);
      setDatas(datas);
    };

    getDatas();
  }, []);

  return (
    <>
      <Navbar />
      <Search getSearchResults={(results) => setDatas(results)} />
      <Data datas={datas} />
      <Footer />
    </>
  );
}
