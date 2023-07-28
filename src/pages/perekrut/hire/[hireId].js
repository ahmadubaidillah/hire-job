/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
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
  const { hireId } = router.query;
  console.log(hireId);
  // console.log("params:" + profileId);

  useEffect(() => {
    getData();
    getDataSkill();
  }, []);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/listPekerjaById/${hireId}`
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
    try {
      const res = await axios.get(`http://localhost:4000/listSkill/${hireId}`);
      console.log(res);
      console.log(res.data.result.rows);
      console.log(res.data.result.rows[0].nama_skill);
      setDataSkill(res.data.result.rows);
      // console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };

  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [projek, setProjek] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");

  const handleHire = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    console.log(decode.id);

    try {
      const response = await axios.post("http://localhost:4000/hire", {
        pekerja_id: hireId,
        perekrut_id: id,
        nama_pengirim: nama,
        email: email,
        projek: projek,
        deskripsi: Deskripsi,
      });
      console.log(response.data);

      if (response.status === 200) {
        // const { pekerja } = await response.json();
        console.log("Hire Succes", response.data);
        alert("Hire Succes");
        router.push("/perekrut/home3");
        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("Hire failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("Hire error:", error);
      // Display error message to the pekerja
    }
  };
  const nma = "nama belum diisi";
  const jb = "job belum diisi";
  const kota = "domisili belum diisi";
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-4 ">
            <div className="card w-75 bg-white mx-auto">
              <div className="card-body">
                <div className="text-center">
                  <Image
                    src={data && data.image ? data.image : img}
                    alt=""
                    width={100}
                    height={100}
                    className="mb-3"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
                <h5 className="card-title">
                  {" "}
                  {data && data.nama ? data.nama : nma}
                </h5>
                <p style={{ color: "#9EA0A5" }}>
                  {" "}
                  {data && data.job ? data.job : jb}
                </p>
                <p style={{ color: "#9EA0A5" }}>
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
                <h6 className="mb-3">Skill</h6>

                <div className="row mx-auto mb-3">
                  {dataSkill.map((item) => (
                    <div className="col-md-6 mb-3" key={item.id}>
                      <button className="btn btn-warning text-white mx-1 w-100">
                        {item.nama_skill}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="mt-5">Halo, Pewpeople</h2>
            <p className="mt-3 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form onSubmit={handleHire}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nama Pengirim
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Nama "
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Alamat Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Projek
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Nama Projek"
                  onChange={(e) => setProjek(e.target.value)}
                />
              </div>
              <span className="">Deskripsi</span>
              <div className="input-group mb-3 mt-2">
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="Deskripsikan/jelaskan lebih detail "
                  style={{ height: "200px" }}
                  onChange={(e) => setDeskripsi(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 btn-login text-white mt-5 mb-5"
              >
                HIRE
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
