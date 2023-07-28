/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../app/style.css";
import Image from "next/image";
import img from "../../../../public/asset/images/defaultimg.jpg";
import Navbar from "../../../components/navbar3";
import Footer from "../../../components/footer";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const index = () => {
  const router = useRouter();
  const { pekerjaId } = router.query;
  console.log(pekerjaId);
  // console.log("params:" + profileId);

  useEffect(() => {
    getData();
    getDataSkill();
    getDataPengalaman();
    getDataPortofolio();
  }, []);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/listPekerjaById/${pekerjaId}`
      );
      console.log(res);
      console.log(res.data[0]);
      setData(res.data[0]);
      console.log(data.id);
      console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };

  const [dataSkill, setDataSkill] = useState([]);
  console.log(dataSkill);

  const getDataSkill = async () => {
    // const token = localStorage.getItem("token");
    // const decode = jwtDecode(token);
    // const id = decode.id;
    // console.log(decode.id);
    try {
      const res = await axios.get(
        `http://localhost:4000/listSkill/${pekerjaId}`
      );
      console.log(res);
      console.log(res.data.result.rows);
      console.log(res.data.result.rows[0].nama_skill);
      setDataSkill(res.data.result.rows);
      // console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };
  const [dataPengalaman, setDataPengalaman] = useState([]);

  const getDataPengalaman = async () => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    console.log(decode.id);
    try {
      const res = await axios.get(
        `http://localhost:4000/listPengalaman/${pekerjaId}`
      );
      console.log(res);
      console.log(res.data.result.rows);
      console.log(res.data.result.rows[0].nama_skill);
      setDataPengalaman(res.data.result.rows);
      // console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };

  const [dataPortofolio, setDataPortofolio] = useState([]);

  const getDataPortofolio = async () => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    console.log(decode.id);
    try {
      const res = await axios.get(
        `http://localhost:4000/listPortofolio/${pekerjaId}`
      );
      console.log(res);
      console.log(res.data.result.rows);
      console.log(res.data.result.rows[0].nama_skill);
      setDataPortofolio(res.data.result.rows);
      // console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };
  const nma = "nama belum diisi";
  const jb = "job belum diisi";
  const kota = "domisili belum diisi";
  const ins = " ";
  const linked = " ";

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row text-center mt-5 ">
          <div
            className="col-lg-10 shadow-lg mt-1  mx-auto"
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
              {data && data.nama ? data.nama : nma}
            </h2>
            <p style={{ fontSize: "20px" }}>
              {data && data.job ? data.job : jb}
            </p>
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

            <Link
              className="btn btn-primary w-25 mt-4 mb-5"
              href={`/perekrut/hire/${pekerjaId}`}
            >
              Hire
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
              {data && data.email ? data.email : ins}
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
              {data && data.no_hp ? data.no_hp : ins}
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

            <h5 className="mb-4">Skill</h5>
            <div className="row w-50 mx-auto">
              {dataSkill.map((item) => (
                <div className="col-md-4" key={item.iid}>
                  <button className="btn btn-warning text-white mx-1 w-100">
                    {item.nama_skill}
                  </button>
                </div>
              ))}
            </div>
            <br />
            <p className="mt-2 fw-bold">Pengalaman :</p>
            <div className="row mx-auto mb-3">
              {dataPengalaman.map((item) => (
                <div className="col-md-4 mb-3 " key={item.id}>
                  <div className="card ">
                    <div className="card-body">
                      <p className="">
                        <Image
                          src={item.image}
                          alt=""
                          width={30}
                          height={30}
                          className="mb-1 mx-3"
                          // style={{ borderRadius: "50px" }}
                        />
                        {item.perusahaan}
                      </p>
                      <p className="">
                        ( {item.tgl_mulai} - {item.tgl_keluar} )
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <p className="mt-2 fw-bold">Portofolio :</p>
            <div className="row mx-auto mb-3">
              {dataPortofolio.map((item) => (
                <div className="col-md-4 mb-3 " key={item.id}>
                  <div className="card ">
                    <div className="card-body">
                      <p className="text-start">{item.nama_apk}</p>
                      <Image
                        src={item.image}
                        alt=""
                        width={200}
                        height={150}
                        className="mb-1 mx-3"
                        // style={{ borderRadius: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
