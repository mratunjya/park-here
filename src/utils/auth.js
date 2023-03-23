import axiosInstance from "@axiosInstance";
import { parseCookies } from "nookies";
import localforage from "localforage";
import { USER } from "@constants/moduleNames";

export const isAuthenticated = (ctx) => {
  const { token } = parseCookies(ctx);

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const signIn = async (token, module, ctx) => {
  // Set token to local storage
  await localforage?.setItem("token", token);
  await localforage?.setItem("module", module);

  // Set token to axios instance
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // Set token to cookie
  document.cookie = `token=${token}; path=/`;
  document.cookie = `module=${module}; path=/`;

  // Change the state of the app to authenticated
  isAuthenticated(ctx);

  window.location.href = `/dashboard/${module}`;

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

    window.location.href = `/sign-out/`;

    return;
  }
};

export const getModuleName = (ctx) => {
  const { module } = parseCookies(ctx);

  if (module) {
    return module;
  } else {
    return;
  }
};
