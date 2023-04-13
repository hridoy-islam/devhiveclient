import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(true);
  const uid = localStorage.getItem("user_id");
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
          `http://localhost:5000/user/${uid}`,

          config
        );
        console.log(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, [uid]);
  return [admin, loadingAdmin];
};

export default useAdmin;
