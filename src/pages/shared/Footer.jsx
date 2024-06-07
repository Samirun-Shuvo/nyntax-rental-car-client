import apple from "../../assets/footer/apple.png";
import google from "../../assets/footer/google.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-10 bg-[#51907D] text-white">
      <div className="text-white flex justify-around items-center">
        <p className="flex justify-center items-center">
          <p>Privacy Policy | Terms of service | Accessibility | Contact Us</p>
        </p>
      </div>
      <hr className="w-50 h-0.1 bg-[#FFDD5F] mx-auto my-5" />
      <div className="flex justify-center items-center">
        <img className="w-28 mx-2" src={apple} alt="" />
        <img className="w-28 mx-2" src={google} alt="" />
      </div>
      <p className="text-center py-4">FOLLOW US</p>
      <div className="flex justify-center items-center gap-2 text-4xl">
        <FaFacebook className="bg-[#F8C200] p-2 rounded-2xl" />
        <FaInstagram className="bg-[#F8C200] p-2 rounded-2xl" />
        <CiTwitter className="bg-[#F8C200] p-2 rounded-2xl" />
        <FaLinkedinIn className="bg-[#F8C200] p-2 rounded-2xl" />
      </div>
      <aside className="text-center mt-8">
        <p>© {currentYear} Designed & Developed by Samirun-Shuvo</p>
      </aside>
    </footer>
  );
};

export default Footer;
