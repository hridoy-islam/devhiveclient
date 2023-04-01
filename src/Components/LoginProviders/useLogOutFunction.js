import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import app from "../../Configs/Firebase.config";
import { logout } from "../../features/api/loginSlice";
export const useLogOutFunction = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  return () => {
    try {
      signOut(auth).then(() => {
        dispatch(logout());
      });
    } catch (error) {
      console.log(error);
      // handle the error as appropriate
    }
  };
};
