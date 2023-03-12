import { USER, ADMIN, ATTENDANT, ORGANIZATION } from "@constants/moduleNames";

export const copy = {
  [USER]: {
    signIn: {
      title: "Sign In",
      signUpRoute: `/sign-up/${USER}`,
    },
    signUp: {
      title: "Sign Up",
      signInRoute: `/sign-in/${USER}`,
    },
  },
  [ADMIN]: {
    signIn: {
      title: "Admin Sign In",
      signUpRoute: `/sign-up/${ADMIN}`,
    },
    signUp: {
      title: "Admin Sign Up",
      signInRoute: `/sign-in/${ADMIN}`,
    },
  },
  [ATTENDANT]: {
    signIn: {
      title: "Attendant Sign In",
      signUpRoute: `/sign-up/${ATTENDANT}`,
    },
    signUp: {
      title: "Attendant Sign Up",
      signInRoute: `/sign-in/${ATTENDANT}`,
    },
  },
  [ORGANIZATION]: {
    signIn: {
      title: "Organization Sign In",
      signUpRoute: `/sign-up/${ORGANIZATION}`,
    },
    signUp: {
      title: "Organization Sign Up",
      signInRoute: `/sign-in/${ORGANIZATION}`,
    },
  },
};
