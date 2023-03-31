import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginProviders = () => {
  return (
    <div className="flex flex-col gap-2">
      <button className="btn flex gap-5 w-full btn-outline btn-error">
        <FaGoogle></FaGoogle>
        <span>Continue with Google</span>
      </button>
      <button className="btn w-full flex gap-5 btn-outline ">
        <FaGithub></FaGithub>
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
};

export default LoginProviders;
