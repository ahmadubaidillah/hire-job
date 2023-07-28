import React from "react";
import Image from "next/image";
import "../app/style.css";
import "bootstrap/dist/css/bootstrap.css";

const HomeRec = () => {
  return (
    <>
      <div className="container mt-5 text-center" style={{ marginBottom: 200 }}>
        <div className="row">
          <div className="col-lg-12 d-none d-sm-none d-md-none d-lg-block">
            <Image
              src="/asset/images/Rectangle 526.png"
              alt=""
              width={1140}
              height={227}
              className="img-fluid mt-5"
              style={{ zIndex: 0 }}
            />
            <svg
              width="1140"
              height="294"
              style={{ marginTop: -300 }}
              viewBox="0 0 1140 294"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.803 237.6C65.8759 260.01 20.5718 228.263 4.16058 209.588C1.38686 205.986 0.23114 203.086 -4.01769e-06 202.086L0 294L1140 294L1140 1.12042e-05C1103.48 69.8628 1011.16 212.09 934.051 222.094C837.664 234.6 735.73 187.578 610.912 237.6C486.095 287.622 389.015 259.109 331.46 237.6C273.905 216.092 178.212 209.588 115.803 237.6Z"
                fill="white"
                fillOpacity="0.05"
              />
            </svg>
            <div
              className="col-lg-3 text-start"
              s
              style={{ zIndex: 1, marginTop: -175, marginLeft: 180 }}
            >
              <h2 className="text-white">
                Lorem Ipsum <br />
                Dolor Sit Amet
              </h2>
            </div>
            <div
              className="col-lg-3 text-start"
              style={{ zIndex: 1, marginTop: -70, marginLeft: 900 }}
            >
              <a href="" className="btn btn-light">
                <span className="fs-5" style={{ color: "#5e50a1" }}>
                  Mulai Dari Sekarang
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRec;
