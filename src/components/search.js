/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../app/style.css";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/asset/images/defaultimg.jpg";

const search = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/datas/search?query=${query}`);

    const data = await response.json();

    getSearchResults(data);
  };
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <div className="search shadow-lg w-50  ">
        <div className="row ">
          <div className="col-md-8 pe-5">
            <div className="search-1">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
