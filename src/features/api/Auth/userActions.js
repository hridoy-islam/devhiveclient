import axios from "axios";
import { registerSuccess } from "./userReducer";
// import { useLocation, useNavigate } from "react-router-dom";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://server-five-lime.vercel.app/user",
      userData
    );
    localStorage.setItem("jwt", response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    localStorage.setItem("jwt", error.response.data.token);
    console.log(error);
  }
};
