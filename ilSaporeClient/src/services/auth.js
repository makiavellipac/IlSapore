import axios from "axios";

const baseURL ="http://localhost:3000"

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials:true
})

const AUTH_SERVICE={
      signup: async (user) => {
        console.log(user)
        return await MY_SERVICE.post("auth/signup", user);
      },
      login: async (user) => {
        return await MY_SERVICE.post("auth/login", user);
      },
      edit: async (user) => {
        return await MY_SERVICE.post("auth/edit", user);
      },
      logout: async () => {
        return await MY_SERVICE.get("auth/logout");
      },
      loggedin: async () => {
        return await MY_SERVICE.get("auth/loggedin");
      }
}

export default AUTH_SERVICE