import Navbar from "./Navbar";
import type { NavbarProps } from "@/app/types";

export default function Header(props: NavbarProps) {
  return (<Navbar {...props} />);
}