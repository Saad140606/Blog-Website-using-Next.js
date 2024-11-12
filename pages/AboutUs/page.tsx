import Link from "next/link";
import Vision from "./Vision";
import Approch from "./Approach";
import Header from "../../components/Header";
import Newsletter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
const AboutUs = () => {
  return (
    <div>
      <Header />
<div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center section-title">
          About <span className=" text-primary">US</span>
        </h1>
      </div>

      <Vision />
      <Approch />
      <Newsletter />
      <Footer />
    </div>
    </div>
    
  );
};

export default AboutUs;
