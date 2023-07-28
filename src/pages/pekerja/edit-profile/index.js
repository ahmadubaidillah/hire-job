/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../app/style.css";
import "./style.css";
import Image from "next/image";
import img from "../../../../public/asset/images/defaultimg.jpg";
import Navbar from "../../../components/navbar2";
import Footer from "../../../components/footer";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const index = () => {
  const router = useRouter();
  // const { profileId } = router.query;
  // console.log("params:" + profileId);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    getDataSkill();
    getDataPengalaman();
    getDataPortofolio();
  }, []);

  const getData = async () => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    console.log(decode.id);
    try {
      const res = await axios.get(
        `http://localhost:4000/listPekerjaById/${id}`
      );
      console.log(res.data);
      setData(res.data[0]);
      console.log(data.id);
      console.log(data.image);
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
      const res = await axios.get(`http://localhost:4000/listPengalaman/${id}`);
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
      const res = await axios.get(`http://localhost:4000/listPortofolio/${id}`);
      console.log(res);
      console.log(res.data.result.rows);
      console.log(res.data.result.rows[0].nama_skill);
      setDataPortofolio(res.data.result.rows);
      // console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };

  const [dataSkill, setDataSkill] = useState([]);

  const getDataSkill = async () => {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    console.log(decode.id);
    try {
      const res = await axios.get(`http://localhost:4000/listSkill/${id}`);
      console.log(res);
      console.log(res.data.result.rows);
      console.log(res.data.result.rows[0].nama_skill);
      setDataSkill(res.data.result.rows);
      // console.log(data.image);
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

  const handleEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;

    try {
      const response = await axios.put(
        `http://localhost:4000/editPekerja/${id}`,
        {
          nama: nama,
          job: job,
          domisili: domisili,
          email: Email,
          no_hp: No,
          ig: Ig,
          linkedin: Lin,
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
        `http://localhost:4000/editImage/${id}`,
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

  const [skill, setSkill] = useState("");

  const handleSkill = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;
    // const skil

    try {
      const response = await axios.post(`http://localhost:4000/addSkill`, {
        pekerja_id: id,
        nama_skill: skill,
      });

      // console.log(response);

      if (response.status === 200) {
        console.log("Skill Succes", response.data);
        alert("Add Skill Succes");
        router.reload();

        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("Skill failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("Skill error:", error);
      // Display error message to the pekerja
    }
  };

  const deleteSkill = async (id, e) => {
    await axios
      .delete(`http://localhost:4000/removeSkill/${id}`)
      .then((response) => {
        // console.log(response);
        alert("delete data succes");
        router.reload();
      });
  };

  const submitSkill = (id, e) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteSkill(id, e),
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
  };

  const [Posisi, setPosisi] = useState("");
  const [Perusahaan, setPerusahaan] = useState("");
  const [Lama, setLama] = useState("");
  const [TglMulai, setTglMulai] = useState("");
  const [TglKeluar, setTglKeluar] = useState("");
  const [Img, setImg] = useState();

  const handlePengalaman = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;

    try {
      const response = await axios.post(
        `http://localhost:4000/addPengalaman`,
        {
          pekerja_id: id,
          posisi: Posisi,
          perusahaan: Perusahaan,
          lama: Lama,
          tgl_mulai: TglMulai,
          tgl_keluar: TglKeluar,
          image: Img,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      // console.log(response);

      if (response.status === 200) {
        console.log("Add Pengalaman Succes", response.data);
        alert("Add Pengalaman Succes");
        router.reload();

        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("Pengalaman failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("Pengalaman error:", error);
      // Display error message to the pekerja
    }
  };

  const deletePengalaman = async (id, e) => {
    await axios
      .delete(`http://localhost:4000/removePengalaman/${id}`)
      .then((response) => {
        // console.log(response);
        alert("delete data succes");
        router.reload();
      });
  };

  const submitPengalaman = (id, e) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deletePengalaman(id, e),
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
  };

  const [namaApk, setTglNamaApk] = useState("");
  const [Link, setLink] = useState("");
  const [Img2, setImg2] = useState();

  const handlePortofolio = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const id = decode.id;

    try {
      const response = await axios.post(
        `http://localhost:4000/addPortofolio`,
        {
          pekerja_id: id,
          nama_apk: namaApk,
          link: Link,
          image: Img2,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      // console.log(response);

      if (response.status === 200) {
        console.log("Add portofolio Succes", response.data);
        alert("Add portofolio Succes");
        router.reload();

        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("portofolio failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("portofolio error:", error);
      // Display error message to the pekerja
    }
  };

  const deletePortofolio = async (id, e) => {
    await axios
      .delete(`http://localhost:4000/removePortofolio/${id}`)
      .then((response) => {
        // console.log(response);
        alert("delete data succes");
        router.reload();
      });
  };

  const submitPortofolio = (id, e) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deletePortofolio(id, e),
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
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
                </div>
                <h5 className="card-title">
                  {data && data.nama ? data.nama : nma}
                </h5>

                <p style={{ color: "#9EA0A5" }}>
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
                <p className="mt-2 fw-bold">Skill :</p>
                <div className="row mx-auto mb-3">
                  {dataSkill.map((item) => (
                    <div className="col-md-6 mb-3" key={item.id}>
                      <button
                        className="btn btn-warning text-white mx-1 w-100"
                        onClick={(e) => submitSkill(item.id, e)}
                      >
                        {item.nama_skill}
                      </button>
                    </div>
                  ))}
                </div>
                <p className="mt-2 fw-bold">Pengalaman :</p>
                <div className="row mx-auto mb-3">
                  {dataPengalaman.map((item) => (
                    <div className="col-md-12 mb-3 " key={item.id}>
                      <p className="text-start">
                        -
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
                      <p className="text-end">
                        ( {item.tgl_mulai} - {item.tgl_keluar} )
                      </p>
                      <button
                        type="submit"
                        className="btn btn-white"
                        onClick={(e) => submitPengalaman(item.id, e)}
                      >
                        <Image
                          src="/asset/images/trash.png"
                          alt=""
                          width={30}
                          height={30}
                          className=""
                          style={{ borderRadius: "5px" }}
                        />
                      </button>
                    </div>
                  ))}
                </div>
                <p className="mt-2 fw-bold">Portofolio :</p>
                <div className="row mx-auto mb-3">
                  {dataPortofolio.map((item) => (
                    <div className="col-md-12 mb-3 " key={item.id}>
                      <p className="text-start">- {item.nama_apk}</p>
                      <Image
                        src={item.image}
                        alt=""
                        width={200}
                        height={150}
                        className="mb-1 mx-3"
                        // style={{ borderRadius: "50px" }}
                      />
                      <button
                        type="submit"
                        className="btn btn-white mt-2"
                        onClick={(e) => submitPortofolio(item.id, e)}
                      >
                        <Image
                          src="/asset/images/trash.png"
                          alt=""
                          width={30}
                          height={30}
                          className=""
                          style={{ borderRadius: "5px" }}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="">Data Diri</h5>
                <hr className="mb-5"></hr>

                <form onSubmit={handleEdit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukkan Nama Lengkap"
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Job Desk
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukan Job Desk"
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
                      placeholder="Masukkan Domisili"
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
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 mt-3"
                  >
                    EDIT
                  </button>
                </form>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="">Edit Image</h5>
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
                    className="btn btn-primary text-white w-100 mt-3"
                  >
                    EDIT
                  </button>
                </form>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="">Skill</h5>
                <hr className="mb-5"></hr>

                <form onSubmit={handleSkill}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nama Skill
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukkan Skill"
                      onChange={(e) => setSkill(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 mt-3"
                  >
                    ADD
                  </button>
                </form>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="">Pengalaman Kerja</h5>
                <hr className="mb-5"></hr>

                <form onSubmit={handlePengalaman}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Posisi{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      onChange={(e) => setPosisi(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Lama Bekerja{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      onChange={(e) => setLama(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Perusahaan{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      onChange={(e) => setPerusahaan(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Tanggal Mulai{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      onChange={(e) => setTglMulai(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Tanggal Masuk{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      onChange={(e) => setTglKeluar(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Gambar Logo Perusahaan
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={(e) => setImg(e.target.files[0])}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 mt-3"
                  >
                    ADD
                  </button>
                </form>
              </div>
            </div>
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="">Portofolio</h5>
                <hr className="mb-5"></hr>

                <form onSubmit={handlePortofolio}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nama Aplikasi{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      onChange={(e) => setTglNamaApk(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Link Aplikasi{" "}
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>

                  <div class="mb-3">
                    <label htmlFor="formFile" className="form-label">
                      Gambar Aplikasi
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={(e) => setImg2(e.target.files[0])}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 mt-3"
                  >
                    ADD
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
