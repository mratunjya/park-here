import axiosInstance from "@axiosInstance";
import localforage from "localforage";
import { parseCookies } from "nookies";

export const isAuthenticated = (ctx) => {
  const { token } = parseCookies(ctx);

  return !!token;
};

export const signIn = async (ctx, token) => {
  // Set token to local storage
  await localforage.setItem("token", token);

  // Set token to axios instance
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // Set token to cookie
  document.cookie = `token=${token}; path=/`;

  // Change the state of the app to authenticated
  isAuthenticated(ctx);
};

export const signOut = (ctx) => {
  const { token } = parseCookies(ctx);

  if (token) {
    // Remove token from local storage
    localforage.removeItem("token");

    // Remove token from axios instance
    delete axiosInstance.defaults.headers.common["Authorization"];

    // Remove token from cookie
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    // Change the state of the app to authenticated
    isAuthenticated(ctx);
  }
};
