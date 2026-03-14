import axios from "axios";

const API = "http://localhost:8080/api";

export interface UrlResponse {
  shortCode: string;
}

export interface UrlData {
  id: number;
  originalUrl: string;
  shortCode: string;
  createdAt: string;
  clicks: number;
}

export const createShortUrl = async (url: string) => {
  const res = await axios.post(`${API}/urls`, {
    url: url
  });
  return res.data;
};

export const getRecentUrls = async () => {
  const res = await axios.get(`${API}/urls`);
  return res.data;
};

export const getAnalytics = async (code: string) => {
  const res = await axios.get(`http://localhost:8080/api/analytics/${code}`);
  return res.data;
};