import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : "252fe2ce38fc4151bca1778ddbb26f79"
    }
})