"use client";
import React from "react";
import { Carousel, Card, Container, Row, Button } from "react-bootstrap";
import Image from "next/image";
import "../app/style.css";

const Testimoni = () => {
  return (
    <>
      <div className="mb-5 mt-5 text-center">
        <h2 className="mt-5 mb-5">Their opinion about peworld</h2>
      </div>
      <Carousel className="mt-5 mb-5">
        <Carousel.Item>
          <div className="d-flex flex-row justify-content-center">
            <div className="p-2">
              <Card style={{ width: "18rem" }} className="text-center mx-4">
                <Image
                  src="/asset/images/person_1.jpg"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                />
                <Card.Body className="">
                  <Card.Title className="">Fransisco Suep</Card.Title>
                  <span style={{ color: "#9ea0a5" }}>Web Developer</span>
                  <Card.Text className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="p-2">
              <Card style={{ width: "18rem" }} className="text-center mx-4">
                <Image
                  src="/asset/images/person_1.jpg"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                />
                <Card.Body className="">
                  <Card.Title className="">Fransisco Suep</Card.Title>
                  <span style={{ color: "#9ea0a5" }}>Web Developer</span>
                  <Card.Text className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="p-2 d-md-none d-lg-block ">
              <Card style={{ width: "18rem" }} className="text-center mx-4">
                <Image
                  src="/asset/images/person_1.jpg"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                />
                <Card.Body className="">
                  <Card.Title className="">Fransisco Suep</Card.Title>
                  <span style={{ color: "#9ea0a5" }}>Web Developer</span>
                  <Card.Text className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex flex-row justify-content-center">
            {" "}
            <div className="p-2">
              <Card style={{ width: "18rem" }} className="text-center mx-4">
                <Image
                  src="/asset/images/person_2.jpg"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                />
                <Card.Body className="">
                  <Card.Title className="">Fransisco Suep</Card.Title>
                  <span style={{ color: "#9ea0a5" }}>Web Developer</span>
                  <Card.Text className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="p-2">
              <Card style={{ width: "18rem" }} className="text-center mx-4">
                <Image
                  src="/asset/images/person_2.jpg"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                />
                <Card.Body className="">
                  <Card.Title className="">Fransisco Suep</Card.Title>
                  <span style={{ color: "#9ea0a5" }}>Web Developer</span>
                  <Card.Text className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="p-2 d-md-none d-lg-block ">
              <Card style={{ width: "18rem" }} className="text-center mx-4">
                <Image
                  src="/asset/images/person_2.jpg"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="d-inline-block align-self-center profile-slide-img w-50 mb-2 mt-3"
                />
                <Card.Body className="">
                  <Card.Title className="">Fransisco Suep</Card.Title>
                  <span style={{ color: "#9ea0a5" }}>Web Developer</span>
                  <Card.Text className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimoni;
