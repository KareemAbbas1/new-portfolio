import Burger from "./Burger";
import { Nav } from "./styles";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

const Navbar = ({ open, setOpen, scroll, width, onLinkClick }) => {
  return (
    <Nav>
      <Link href='/'>
        <Image
          className="logo"
          src={Logo}
          alt="Logo"
          height="auto"
        />
      </Link>
      <Burger
        open={open}
        setOpen={setOpen}
        scroll={scroll}
        width={width}
        onLinkClick={onLinkClick}
      />
    </Nav>
  );
}

export default Navbar