import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/style.css";
import "bootstrap/dist/css/bootstrap.css";

const navbar = () => {
  return (
    <nav className="navbar bg-body ">
      <div className="container-fluid ms-3">
        <a className="navbar-brand" href="#">
          <Image
            src="/asset/images/logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="row">
          <div className="col me-3">
            <Link href="/Login" className="btn btn-outline-primary mx-2">
              Masuk
            </Link>
            <Link href="/register" className="btn btn-primary mx-2">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
