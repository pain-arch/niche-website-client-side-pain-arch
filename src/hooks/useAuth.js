import { useContext } from "react";
import { AuthContext } from "../contextApi/authProvider";

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;