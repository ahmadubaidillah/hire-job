/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
// import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.css";
import "../../app/style.css";
import Image from "next/image";
import img from "../../../public/asset/images/a.jpg";
import Link from "next/link";
import axios from "axios";

const index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no_telepon, setNoTelepon] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/insertPekerja", {
        nama: name,
        email: email,
        no_hp: no_telepon,
        password: password,
      });
      console.log(response.data);

      if (response.status === 200) {
        // const { pekerja } = await response.json();
        console.log("Registration Succes", response.data);
        alert("Registration Succes");
        router.push("/Login");
        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("Registration failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Display error message to the pekerja
    }
  };
  return (
    <div className="container-fluid">
      <div className="row mt-4 mx-3 mb-4">
        <div
          className="login-img col-sm-6 px-0 d-none d-sm-block"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        >
          {/* <Image
              src="/asset/images/a.jpg"
              alt=""
              className="w-100 vh-100 img-fluid"
              style="object-fit: cover; object-position: left"
            /> */}
          <Image
            src="/asset/images/Group 978 1.png"
            alt=""
            width={100}
            height={35}
            className="ms-5 mt-4"
          />
          <div className="d-flex justify-content-center mt-5">
            <h1 className="login-title w-75 mt-5  text-white align-item-center">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </h1>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="px-5 ms-xl-4">
            <Link href="/register" className="btn btn-primary mx-1">
              Perekrut
            </Link>
            <Link
              href="/register-pekerja"
              className="btn btn-outline-primary mx-1"
            >
              Pekerja
            </Link>

            <h2 className="mt-5">Halo, Pewpeople</h2>
            <p className="mt-3 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nama
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Alamat Nama"
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Alamat Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                  Perusahaan
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Alamat Perusahaan"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                  Jabatan
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Alamat Jabatan"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                  No Handphone
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Alamat No Handphone"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-3"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Kata Sandi"
                />
              </div>
              <button
                type="submit"
                className="btn btn-warning text-white w-100 btn-login mt-5"
              >
                Daftar
              </button>
              <p className="mt-3 text-center">
                Anda sudah punya akun ? &nbsp;
                <a
                  className="miss-pass"
                  href="daftar.html"
                  style={{ color: "#fbb017" }}
                >
                  Masuk disini
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
