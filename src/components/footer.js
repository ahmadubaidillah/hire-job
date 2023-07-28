import React from "react";
import Image from "next/image";
import "../app/style.css";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-start mt-5  mb-5">
              <Image
                src="/asset/images/Group 978 1.png"
                alt=""
                width={100}
                height={100}
                className="img-fluid"
              />
              <p className="text-white mt-4">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. In euismod ipsum et dui <br />
                rhoncus auctor.
              </p>
            </div>
            <hr className="bg-white" style={{ border: "2px solid #ffffff" }} />
            <div className="col-lg-12 mb-3">
              <div className="d-flex text-white">
                <div className="p-2 flex-grow-1">
                  2020 Pewworld. All right reserved
                </div>
                <div className="p-2 me-4">Telepon</div>
                <div className="p-2">Email</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
