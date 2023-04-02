import React from "react";
import "./Social.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      {/* hi  */}
      <div className="md:flex">
        <h1 className="text-2xl text-center">DevhiveClients</h1>
        <p className="text-center">
          &copy; DevhiveClient International Ltd. 2023
        </p>
      </div>
      <div className="flex justify-end ">
        <FaTwitter></FaTwitter>
        <FaFacebook></FaFacebook>
        <FaLinkedin></FaLinkedin>
        <FaInstagram></FaInstagram>
      </div>
    </div>
  );
};

export default Social;
