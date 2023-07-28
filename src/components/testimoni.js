"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel, Card, Container, Row, Button } from "react-bootstrap";
import Image from "next/image";
import "../app/style.css";
import img from "../../public/asset/images/defaultimg.jpg";

const Testimoni = () => {
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
      <div className="mb-5 mt-5 text-center">
        <h2 className="mt-5 mb-5">Their opinion about peworld</h2>
      </div>
      <Carousel className="mt-5 mb-5">
        <Carousel.Item>
          <div className="d-flex flex-row justify-content-center">
            {data.slice(0, 2).map((item) => (
              <div className="p-2  " key={item.id}>
                <Card style={{ width: "18rem" }} className="text-center mx-4">
                  <Image
                    src={item && item.image ? item.image : img}
                    alt="Logo"
                    width={120}
                    height={120}
                    className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                  />
                  <Card.Body className="">
                    <Card.Title className="">{item.nama}</Card.Title>
                    <span style={{ color: "#9ea0a5" }}>{item.job}</span>
                  </Card.Body>
                </Card>
              </div>
            ))}
            {data.slice(1, 2).map((item) => (
              <div className="p-2 d-md-none d-lg-block " key={item.id}>
                <Card style={{ width: "18rem" }} className="text-center mx-4">
                  <Image
                    src={item && item.image ? item.image : img}
                    alt="Logo"
                    width={120}
                    height={120}
                    className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                  />
                  <Card.Body className="">
                    <Card.Title className="">{item.nama}</Card.Title>
                    <span style={{ color: "#9ea0a5" }}>{item.job}</span>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-row justify-content-center">
            {data.slice(0, 2).map((item) => (
              <div className="p-2  " key={item.id}>
                <Card style={{ width: "18rem" }} className="text-center mx-4">
                  <Image
                    src={item && item.image ? item.image : img}
                    alt="Logo"
                    width={120}
                    height={120}
                    className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                  />
                  <Card.Body className="">
                    <Card.Title className="">{item.nama}</Card.Title>
                    <span style={{ color: "#9ea0a5" }}>{item.job}</span>
                  </Card.Body>
                </Card>
              </div>
            ))}
            {data.slice(1, 2).map((item) => (
              <div className="p-2 d-md-none d-lg-block " key={item.id}>
                <Card style={{ width: "18rem" }} className="text-center mx-4">
                  <Image
                    src={item && item.image ? item.image : img}
                    alt="Logo"
                    width={120}
                    height={120}
                    className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                  />
                  <Card.Body className="">
                    <Card.Title className="">{item.nama}</Card.Title>
                    <span style={{ color: "#9ea0a5" }}>{item.job}</span>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimoni;
