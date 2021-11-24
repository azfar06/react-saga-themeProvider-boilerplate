import axios from "axios";

const GetToken = () => {
    const token = localStorage.getItem('jwtToken');
    axios.defaults.headers.common["Authorization"] = token;
    return token;
};

export default GetToken;