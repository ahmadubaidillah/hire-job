import Navbar from "../../../components/navbar3";
import HomeMain from "../../../components/homeMain";
import Testimoni from "../../../components/testimoni";
import HomeRec from "../../../components/homeRec";
import Footer from "../../../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeMain mulai="/perekrut/home3" />
      <Testimoni />
      <HomeRec />
      <Footer />
    </>
  );
}
