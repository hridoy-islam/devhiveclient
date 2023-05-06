import React, { useEffect, useState } from "react";
import DeveloperIntro from "../../Components/DeveloperProfile.js/DeveloperIntro";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


const DeveloperProfile = () => {
  const profile = useLoaderData([]);
  
  
  return (
    <div>
      <DeveloperIntro profile={profile}></DeveloperIntro>
    </div>
  );
};

export default DeveloperProfile;
