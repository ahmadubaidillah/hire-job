import Link from "next/link";
import Image from "next/image";
import img from "../../public/asset/images/defaultimg.jpg";

const data = ({ datas }) => {
  return (
    <div className="container">
      <div className="row">
        {datas.map((item) => (
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
  );
};

export default data;
