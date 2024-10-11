import axios, { AxiosRequestConfig,AxiosHeaders } from "axios";

export const axiosInstance = axios.create({});



export const apiConnector = (
    method: string,
    url: string,
    bodyData?: any,
    headers?:any,
    params?: any
) => {
    const config: AxiosRequestConfig = {
        method: method,
        url: url,
        data: bodyData || null,
        headers: headers || undefined, 
        params: params || undefined
    };
    return axiosInstance(config);
};
