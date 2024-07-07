import axios from "axios";
import Cookies from "js-cookie";

const cookie = Cookies();

const token  = cookie.get()

axios.create({
    baseURL:"https://group-two.midend.tech",
    headers:{
        Accept:"",
        Authorization:`Bearer: ${token}`
    }
})