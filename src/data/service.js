import axios from "axios";

import * as path from "./index"


const axiosConfig = {
    headers: {
        "X-HS18-App-Platform": "androidApp",
        "X-HS18-App-ID": "4819c9ceb71c648222333",
        "X-HS18-App-Version": "3.2.4",
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Cache-Control",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
};


export const axiosPost = function (data, ...params) {
    return axios.post(`${params[0]}`, data, axiosConfig);
}

export const axiosGet = function (data, ...params) {
    return axios.get(`${params[0]}`, axiosConfig)

}

export const homepageListing = function (...params) {
    return axiosGet(null, path.HOME_PAGE);
}
