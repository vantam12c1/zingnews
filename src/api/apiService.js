import axiosClient from "./axiosClient";
import * as URL from '../utils/url';

const api = {   
    get(endpoint, queryData = null) {
        return axiosClient.get(URL.merge(endpoint, URL.query(queryData)));
    },
    post(endpoint, data) {
        return axiosClient.post(endpoint, data);
    },
    put(endpoint, id, data) {
        return axiosClient.put(URL.merge(endpoint, URL.query(id)), data);
    },
    delete(endpoint, id) {
        return axiosClient.delete(URL.merge(endpoint, URL.query(id)));
    }
}

export default api;