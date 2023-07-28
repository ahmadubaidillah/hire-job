/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Link from "next/link";
import { Pagination, Container } from "react-bootstrap";

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <Container>
    <Pagination className="d-flex justify-content-center">
      {pageNumbers.map((number) => (
        <Link onClick={() => paginate(number)} href="!#">
          <Pagination.Item>{number}</Pagination.Item>
        </Link>
      ))}
      {/* </li> */}
    </Pagination>
    // </Container>
    //   </ul>
    // </div>
  );
};

export default Paginations;
