import { ACCENT_700 } from "@constants/colors";
import {
  BiEnvelope,
  BiHelpCircle,
  BiHome,
  BiInfoCircle,
  BiLockAlt,
} from "react-icons/bi";

export const navLinksData = [
  {
    name: "Home",
    href: "/",
    icon: <BiHome size={16} color={ACCENT_700} />,
  },
  {
    name: "About",
    href: "/about",
    icon: <BiInfoCircle size={16} color={ACCENT_700} />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <BiEnvelope size={16} color={ACCENT_700} />,
  },
  {
    name: "Help & FAQ",
    href: "/help-faq",
    icon: <BiHelpCircle size={16} color={ACCENT_700} />,
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    icon: <BiLockAlt size={16} color={ACCENT_700} />,
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
};
