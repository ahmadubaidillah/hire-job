import Navbar from "../components/navbar";
import HomeMain from "../components/homeMain";
import Testimoni from "../components/testimoni";
import HomeRec from "../components/homeRec";
import Footer from "../components/footer";

export default function Home() {
  // const mulai = "/login";
  return (
    <main>
      <Navbar />
      <HomeMain mulai="/Login" />
      <Testimoni />
      <HomeRec />
      <Footer />
    </main>
  );
}
