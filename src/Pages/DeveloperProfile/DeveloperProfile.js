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
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/service/developer/${localStorage.getItem(
            "user_id"
          )}`,

          config
        );
        setServiceData(data);
        console.log(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <DeveloperIntro serviceData={serviceData} profile={profile}></DeveloperIntro>
    </div>
  );
};

export default DeveloperProfile;
