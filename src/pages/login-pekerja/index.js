/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import "../../app/style.css";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/asset/images/a.jpg";
import axios from "axios";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/loginPekerja", {
        email: email,
        password: password,
      });
      console.log(response.data);

      if (response.status === 200) {
        // const { pekerja } = await response.json();
        localStorage.setItem("token", response.data.accessToken);

        console.log("Login Succes", response.data);
        alert("Login Succes");
        router.push("/pekerja/Profile/");
        // Perform any necessary redirection or show success message
      } else {
        // const { message } = await response.json();
        console.error("Login failed");
        // Display error message to the pekerja
      }
    } catch (error) {
      console.error("Login error:", error);
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
            <Link href="/Login" className="btn btn-outline-primary mx-1">
              Perekrut
            </Link>
            <Link href="/login-pekerja" className="btn btn-primary mx-1">
              Pekerja
            </Link>

            <h2 className="mt-5">Halo, Pewpeople</h2>
            <p className="mt-3 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form onSubmit={handleLogin}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Kata Sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 text-end">
                <a className="miss-pass">
                  <p>Lupa kata sandi ?</p>
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-warning w-100 btn-login text-white"
              >
                Masuk
              </button>
              <p className="mt-3 text-center">
                Anda belum punya akun?
                <Link
                  className="miss-pass"
                  href="/register"
                  style={{ color: "#fbb017" }}
                >
                  Daftar disini
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

// const token = response.data.token;
//         var base64Url = token.split(".")[1];
//         var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//         var jsonPayload = decodeURIComponent(
//           window
//             .atob(base64)
//             .split("")
//             .map(function (c) {
//               return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//             })
//             .join("")
//         );

//         const decode = JSON.parse(jsonPayload);

//         console.log(decode);
