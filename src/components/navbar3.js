/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/style.css";
import "bootstrap/dist/css/bootstrap.css";
import img from "../../public/asset/images/defaultimg.jpg";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

const navbar = () => {
  const router = useRouter();
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/home");
  };

  return (
    <nav className="navbar bg-body shadow">
      <div className="container-fluid ms-3">
        <Link className="navbar-brand" href="/perekrut/home2">
          <Image
            src="/asset/images/logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="row me-3">
          <div className="col me-3 d-flex justify-content-center">
            <Image
              src="/asset/images/bell.png"
              alt="Logo"
              width={27}
              height={27}
              className="d-inline-block align-text-top mx-2"
            />
            <Image
              src="/asset/images/mail.png"
              alt="Logo"
              width={27}
              height={27}
              className="d-inline-block align-text-top mx-2"
            />
            <Link href={`/perekrut/company-profile`}>
              <Image
                src={data && data.image ? data.image : img}
                alt="Logo"
                width={30}
                height={30}
                className="d-inline-block align-text-top mx-2"
                style={{ borderRadius: "50%" }}
              />
            </Link>
            <button
              type="button"
              className="btn btn-danger ms-5"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
