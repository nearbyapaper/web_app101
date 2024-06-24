import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Register WebApp101",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return <section>{children}</section>;
}
