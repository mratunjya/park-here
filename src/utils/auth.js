import axiosInstance from "@axiosInstance";
import { parseCookies } from "nookies";
import localforage from "localforage";

export const isAuthenticated = (ctx) => {
  const { token } = parseCookies(ctx);

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const signIn = async (token, ctx) => {
  // Set token to local storage
  await localforage?.setItem("token", token);

  // Set token to axios instance
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // Set token to cookie
  document.cookie = `token=${token}; path=/`;

  // Change the state of the app to authenticated
  isAuthenticated(ctx);

  return;
};

export const signOut = (ctx) => {
  const { token } = parseCookies(ctx);

  if (token) {
    // Remove token from local storage
    localforage?.removeItem("token");

    // Remove token from axios instance
    delete axiosInstance.defaults.headers.common["Authorization"];

    // Remove token from cookie
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    // Change the state of the app to authenticated
    isAuthenticated(ctx);

    return;
  }
};
