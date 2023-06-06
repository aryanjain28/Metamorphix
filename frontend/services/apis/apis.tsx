import axios, { AxiosHeaders } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
  withCredentials: false,
});

export function GET<Params, Response>(
  url: string,
  params?: Params,
  headers?: AxiosHeaders
): Promise<Response> {
  return axiosInstance.get(url, { params, headers }).then((res) => res.data);
}

export function POST<Payload, Response>(
  url: string,
  data: Payload,
  headers?: AxiosHeaders
): Promise<Response> {
  return axiosInstance.post(url, data, { headers }).then((res) => res.data);
}
