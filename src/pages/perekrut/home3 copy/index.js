/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../app/style.css";
import Image from "next/image";
import img from "../../../../public/asset/images/defaultimg.jpg";
import Navbar from "../../../components/navbar3";
import Footer from "../../../components/footer";
import axios from "axios";
import Link from "next/link";

const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/listPekerja`);
      console.log(res.data);
      setData(res.data);
      console.log(data.id);
      console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="row"
        style={{ backgroundColor: "#5E50A1", height: "65px" }}
      >
        <div className="col-lg-12 text-white fs-5 fw-bold ms-4 mt-3">
          Top Jobs
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="search shadow-lg w-75  ">
          <div className="row ">
            <div className="col-md-8 pe-5">
              <div className="search-1">
                <Image
                  src="/asset/images/search.png"
                  alt=""
                  width={27}
                  height={27}
                  className="image position-absolute start-100 mt-2"
                  //   style="object-fit: cover; object-position: left"
                />
                <input type="text" placeholder="UX Designer"></input>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className="search-2">
                  <input type="text" placeholder="Kategori"></input>
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-md-3 mb-3 " key={item.id}>
              <Link
                href={`/perekrut/Profile/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card w-75">
                  <div className="card-body">
                    <Image
                      src={item && item.image ? item.image : img}
                      alt="aa"
                      width={100}
                      height={100}
                      className="mb-3 "
                      style={{ borderRadius: "5px", objectFit: "cover" }}
                    />
                    <h5 className="card-title">{item.nama}</h5>
                    <p style={{ color: "#9EA0A5" }}>{item.job}</p>
                    <p style={{ color: "#9EA0A5" }}>
                      <Image
                        src="/asset/images/map.png"
                        alt=""
                        width={15}
                        height={15}
                        className="mb-1 me-2"
                        style={{ borderRadius: "5px" }}
                      />
                      {item.domisili}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
