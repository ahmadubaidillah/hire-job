import React from "react";
import Image from "next/image";
import "../app/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const homeMain = (props) => {
  return (
    <main>
      <div className="container mt-5 mx-auto w-75 mb-5">
        <div className="row">
          <div className="col-lg-6 mt-5 animate__animated animate__backInLeft">
            <h1 className="mt-5">Talenta terbaik negri</h1>
            <h1>untuk perubahan</h1>
            <h1>revolusi 4.0</h1>
            <p className="w-75" style={{ color: "#46505c" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              iusto at veritatis rerum incidunt culpa
            </p>
            <Link href={props.mulai} className="btn btn-primary mt-4 mb-5">
              Mulai Sekarang
            </Link>
          </div>
          <div className="col-lg-6 animate__animated animate__backInRight">
            <Image
              src="/asset/images/Group 1195.png"
              alt=""
              width={620}
              height={620}
              className="img-fluid h-100 "
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="row mt-5">
          <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block mx-auto">
            <Image
              src="/asset/images/Group 1194.png"
              alt=""
              width={570}
              height={490}
              className="img-fluid h-100"
            />
          </div>
          <div className="col-lg-6 mt-5 mx-auto">
            <h2>Kenapa harus mencari tallent</h2>
            <h2>di peworld</h2>
            <div className="mt-4" style={{ color: "#46505c" }}>
              <p>
                <Image
                  src="/asset/images/tick 1.png"
                  alt=""
                  width={24}
                  height={24}
                  className=""
                />
                &nbsp; Lorem ipsum dolor sit amet.
              </p>
              <p>
                <Image
                  src="/asset/images/tick 1.png"
                  alt=""
                  height={24}
                  width={24}
                  className=""
                />
                &nbsp; Lorem ipsum dolor sit amet.
              </p>
              <p>
                <Image
                  src="/asset/images/tick 1.png"
                  alt=""
                  height={24}
                  width={24}
                  className=""
                />{" "}
                &nbsp; Lorem ipsum dolor sit amet.
              </p>
              <p>
                <Image
                  src="/asset/images/tick 1.png"
                  alt=""
                  height={24}
                  width={24}
                  className=""
                />{" "}
                &nbsp; Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mt-5 mb-4">
            <h2>Skill Talent</h2>
            <p className="w-75" style={{ color: "#46505c" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="d-flex">
              <div className="row">
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; Java
                </p>
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; Kotlin
                </p>
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; PHP
                </p>
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; Javascrpt
                </p>
              </div>
              <div className="row">
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; Golang
                </p>
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; C++
                </p>
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; Ruby
                </p>
                <p className="">
                  <Image
                    src="/asset/images/tick 13.png"
                    alt=""
                    width={24}
                    height={24}
                    className=""
                  />{" "}
                  &nbsp; 10+ Bahasa Lainya
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mx-auto">
            <Image
              src="/asset/images/Group 1196.png"
              alt=""
              width={571}
              height={491}
              className="img-fluid h-100"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default homeMain;
