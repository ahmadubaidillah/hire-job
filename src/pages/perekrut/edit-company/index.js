/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../app/style.css";
import "./style.css";
import Image from "next/image";
import img from "../../../../public/asset/images/defaultimg.jpg";
import Navbar from "../../../components/navbar3";
import Footer from "../../../components/footer";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);
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

  const [nama, setNama] = useState("");
  const [job, setJob] = useState("");
  const [domisili, setDomisili] = useState("");
  const [Email, setEmail] = useState("");
  const [No, setNo] = useState("");
  const [Ig, setIg] = useState("");
  const [Lin, setLin] = useState("");
  const [Des, setDes] = useState("");

  const handleEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;

    try {
      const response = await axios.put(
        `http://localhost:4000/editPerekrut/${id}`,
        {
          jabatan: job,
          nama_perusahaan: nama,
          domisili: domisili,
          email: Email,
          no_hp: No,
          ig: Ig,
          linkedin: Lin,
          deskripsi: Des,
        }
      );
      console.log(response);

      if (response.status === 200) {
        console.log("Login Succes", response.data);
        alert("Edit data Succes");
        router.reload();

        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("Edit failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("Edit error:", error);
      // Display error message to the pekerja
    }
  };
  const [photo, setPhoto] = useState();

  const handleImage = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;

    try {
      const response = await axios.put(
        `http://localhost:4000/editImagePerekrut/${id}`,
        {
          image: photo,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response);

      if (response.status === 200) {
        console.log("Edit data Succes", response.data);
        alert("Edit data Succes");
        router.reload();

        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("Edit failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("Edit error:", error);
      // Display error message to the pekerja
    }
  };
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
                    className="mb-3 border"
                    style={{ borderRadius: "50%" }}
                  />
                  <p style={{ color: "#9EA0A5" }} className="fw-bold ">
                    <Image
                      src="/asset/images/edit.png"
                      alt=""
                      width={15}
                      height={15}
                      className="mb-1 me-2"
                      style={{ borderRadius: "5px" }}
                    />
                    Edit
                  </p>
                </div>
                <h5 className="card-title">{data.nama_perusahaan}</h5>

                <p style={{ color: "#9EA0A5" }}>{data.jabatan}</p>
                <p style={{ color: "#9EA0A5" }}>
                  <Image
                    src="/asset/images/map.png"
                    alt=""
                    width={15}
                    height={15}
                    className="mb-1 me-2"
                    style={{ borderRadius: "5px" }}
                  />
                  {data.domisili}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="">Data Diri</h5>
                <hr className="mb-5"></hr>

                <form onSubmit={handleEdit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nama Perusahaan
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukkan Nama Perusahaan"
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Jabatan
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukan bidang perusahaan ex : Financial"
                      onChange={(e) => setJob(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Domisili
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukan Domisili"
                      onChange={(e) => setDomisili(e.target.value)}
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
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      No Handphone
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="No Handphone"
                      onChange={(e) => setNo(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Instagram
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Instagram"
                      onChange={(e) => setIg(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Linkedin
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Linkedin"
                      onChange={(e) => setLin(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Deskripsi
                    </label>
                    <textarea
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Linkedin"
                      onChange={(e) => setDes(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning text-white w-100 mt-3"
                  >
                    EDIT
                  </button>
                </form>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="">Data Diri</h5>
                <hr className="mb-5"></hr>

                <form onSubmit={handleImage}>
                  <div class="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Choose Image
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={(e) => setPhoto(e.target.files[0])}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning text-white w-100 mt-3"
                  >
                    EDIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
