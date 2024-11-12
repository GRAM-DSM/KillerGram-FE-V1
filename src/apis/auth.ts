import axios, { AxiosInstance } from "axios";
import { Cookies } from "react-cookie";

const router = "users";
export const cookies = new Cookies();
const baseUrl = "https://japan-8911-deploynow.ncloud.sbs";

const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export const login = async (data: { account_id: string; password: string }) => {
  try {
    const response = await api.post(`${router}/login`, data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "로그인 요청 중 오류가 발생했습니다."
      );
    } else {
      throw new Error("로그인 요청 중 알 수 없는 오류가 발생했습니다.");
    }
  }
};
