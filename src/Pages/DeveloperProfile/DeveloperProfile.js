import React, { useEffect, useState } from "react";
import DeveloperIntro from "../../Components/DeveloperProfile.js/DeveloperIntro";
import axios from "axios";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const DeveloperProfile = () => {
  const profile = useLoaderData([]);
  console.log(profile);
  let location = useLocation();
  const from = location.state?.from?.pathname || "/developer-register";
  const navigate = useNavigate();
  useEffect(() => {
    if (profile.length == 0) {
      navigate(from, { replace: true });
    }
  }, [profile]);

  return (
    <div>
      <DeveloperIntro profile={profile}></DeveloperIntro>
    </div>
  );
};

export default DeveloperProfile;
