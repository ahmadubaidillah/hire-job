/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../app/style.css";
import Image from "next/image";
import img from "../../../../public/asset/images/a.jpg";
import Navbar from "../../../components/navbar2";
import Footer from "../../../components/footer";
import axios from "axios";
import Link from "next/link";
import jwtDecode from "jwt-decode";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useRouter } from "next/router";
const index = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

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
        `http://localhost:4000/listHireByPekerjaId/${id}`
      );
      console.log(res.data);
      setData(res.data);
      console.log(data.id);
      console.log(data.image);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHire = async (id, e) => {
    await axios
      .delete(`http://localhost:4000/removeHireByPekerjaId/${id}`)
      .then((response) => {
        // console.log(response);
        alert("delete data succes");
        router.reload();
      });
  };

  const submitDelete = (id, e) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteHire(id, e),
        },
        {
          label: "No",
          //onClick: () => alert('Click No')
        },
      ],
    });
  };
  return (
    <>
      <Navbar />
      <div
        className="row"
        style={{ backgroundColor: "#5E50A1", height: "65px" }}
      >
        <div className="col-lg-12 text-white fs-5 fw-bold ms-4 mt-3">
          Jobs Request
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          {data.map((item) => (
            <div className="col-md-12 mb-3 " key={item.id}>
              <div className="card w-50 mx-auto">
                <div className="card-body">
                  <h7 className="card-title mb-3">
                    FROM : {item.nama_pengirim} - ({item.email})
                  </h7>

                  <p style={{ color: "#9EA0A5" }} className="mt-5">
                    PROJEK : {item.projek}
                  </p>
                  <p style={{ color: "#9EA0A5" }}>
                    DESKRIPSI : {item.deskripsi}
                  </p>
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={(e) => submitDelete(item.id, e)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
