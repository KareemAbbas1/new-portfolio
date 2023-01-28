import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children, open, setOpen, scroll, width, onLinkClick }) => {
    return (
        <>
            <Navbar
                open={open}
                setOpen={setOpen}
                scroll={scroll}
                width={width}
                onLinkClick={onLinkClick}
            />
            {children}
            <Footer />
        </>
    )
}

export default Layout;