/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../../../app/style.css";
import Image from "next/image";
import img from "../../../../public/asset/images/defaultimg.jpg";
import Navbar from "../../../components/navbar3";
import Footer from "../../../components/footer";
import jwtDecode from "jwt-decode";
import Link from "next/link";

const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    console.log(decode.id);
    try {
      const res = await axios.get(
        `http://localhost:4000/listPerekrutById/${id}`
      );
      console.log(res.data);
      setData(res.data[0]);
      console.log(data.id);
      console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };
  const nma = "nama belum diisi";
  // const jb = "job belum diisi";
  const kota = "domisili belum diisi";
  const ins = " - ";
  const linked = " ";
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row text-center mt-5">
          <div
            className="col-lg-10 shadow-lg mt-1 mb-5  mx-auto"
            style={{
              background: "linear-gradient(180deg,#5E50A1 17%, #fff 10% )",
            }}
          >
            <div className=" mb-5 " style={{ height: "15px" }}></div>
            <Image
              src={data && data.image ? data.image : img}
              alt=""
              width={150}
              height={150}
              className="mb-1 me-2 mt-5"
              style={{ borderRadius: "50%" }}
            />
            <h2 className=" mt-4 mb-4">
              {data && data.nama_perusahaan ? data.nama_perusahaan : nma}
            </h2>
            <p style={{ color: "#9EA0A5", fontSize: "18px" }}>
              <Image
                src="/asset/images/map.png"
                alt=""
                width={15}
                height={15}
                className="mb-1 me-2"
                style={{ borderRadius: "5px" }}
              />
              {data && data.domisili ? data.domisili : kota}
            </p>
            <p
              style={{ color: "#9EA0A5", fontSize: "18px" }}
              className="w-75 mx-auto mt-5 mb-3"
            >
              {data && data.deskripsi ? data.deskripsi : ins}
            </p>
            <Link
              className="btn btn-primary w-25 mt-4 mb-3"
              href="/perekrut/edit-company"
            >
              Edit Profile
            </Link>
            <p style={{ color: "#9EA0A5" }}>
              <Image
                src="/asset/images/mail.png"
                alt=""
                width={15}
                height={15}
                className="mb-1 me-2"
                style={{ borderRadius: "5px" }}
              />
              {data.email}
            </p>
            <p style={{ color: "#9EA0A5" }}>
              <Image
                src="/asset/images/phone.png"
                alt=""
                width={15}
                height={15}
                className="mb-1 me-2"
                style={{ borderRadius: "5px" }}
              />
              {data.no_hp}
            </p>
            <p style={{ color: "#9EA0A5" }}>
              <Image
                src="/asset/images/ig.png"
                alt=""
                width={15}
                height={15}
                className="mb-1 me-2"
                style={{ borderRadius: "5px" }}
              />
              {data && data.ig ? data.ig : ins}
            </p>
            <p style={{ color: "#9EA0A5" }}>
              <Image
                src="/asset/images/in.png"
                alt=""
                width={15}
                height={15}
                className="mb-1 me-2"
                style={{ borderRadius: "5px" }}
              />
              {data && data.linkedin ? data.linkedin : linked}
            </p>
            <div className="mb-5 text-white " style={{ height: "100px" }}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
