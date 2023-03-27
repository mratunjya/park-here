import { getModuleName } from "@utils/auth";

export const navLinksData = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Help & FAQ",
    href: "/help-faq",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export const navButtonsData = {
  signIn: {
    name: "Sign In",
    href: "/sign-in/user",
  },
  signUp: {
    name: "Sign Up",
    href: "/sign-up/user",
  },
  myAccount: {
    name: "My Account",
    subNav: [
      {
        name: "Dashboard",
        href: `/dashboard/${getModuleName()}`,
      },
      {
        name: "My Profile",
        href: "/dashboard/profile",
      },
    ],
  },
};
