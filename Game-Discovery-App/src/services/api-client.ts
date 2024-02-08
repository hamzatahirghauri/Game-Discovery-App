import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
        key: '253c93e60cee4b7b8d2bbcc35ca894dd'
    }
})