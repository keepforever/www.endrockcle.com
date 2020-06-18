import { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { FaHamburger } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';

import { useTransition, animated } from 'react-spring';

const Header = ({ siteTitle = '', dark = false, setFixed }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const transitions = useTransition(menuOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const closeMenu = () => {
        setMenuOpen(false);
        setFixed(false);
    };

    return (
        <header
            className={classnames('site-header', {
                'dark-header': dark,
            })}
        >
            <div className="container">
                <div className="row middle-xs">
                    <div className="col-xs-11">
                        <Link href="/">
                            <img
                                style={{
                                    height: '33px',
                                    width: '164px',
                                }}
                                src="/EndRock_logo_color_nobg.png"
                                alt="band logo"
                            />
                        </Link>
                    </div>
                    <div className="col-xs-1 center-xs">
                        <a
                            href="#menu"
                            className="burger-link"
                            onClick={(e) => {
                                e.preventDefault();
                                setMenuOpen(!menuOpen);
                                setFixed(!menuOpen);
                            }}
                        >
                            {!menuOpen && <FaHamburger width={30} height={30} />}
                            {menuOpen && <FaWindowClose width={30} height={30} />}
                        </a>
                    </div>
                </div>
            </div>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} className="navigation" style={props}>
                            <nav className="container">
                                <Link className="nav-item" href="/about" activeClassName="txt-bold">
                                    <a>About Findaway</a>
                                </Link>
                                <div className="nav-group">
                                    <a className="nav-group-header">Our Partners</a>
                                    <Link className="nav-item" href="/retailers" activeClassName="txt-bold">
                                        <a>Retailers</a>
                                    </Link>
                                    <Link className="nav-item" href="/publishers" activeClassName="txt-bold">
                                        <a>Publishers</a>
                                    </Link>
                                    <Link className="nav-item" href="/authors" activeClassName="txt-bold">
                                        <a>Authors</a>
                                    </Link>
                                    <Link className="nav-item" href="/institutions" activeClassName="txt-bold">
                                        <a>Institutions</a>
                                    </Link>
                                </div>
                                <Link className="nav-item" href="/whats-happening" activeClassName="txt-bold">
                                    <a>News Center</a>
                                </Link>
                                <Link
                                    className="nav-item"
                                    href="/being-a-findawayer"
                                    onClick={() => closeMenu()}
                                    partiallyActive={true}
                                    activeClassName="txt-bold"
                                >
                                    <a>Being a Findawayer</a>
                                </Link>
                                <Link
                                    className="nav-item"
                                    href="/being-a-findawayer/#join-us"
                                    partiallyActive={true}
                                    onClick={() => closeMenu()}
                                    activeClassName="txt-bold"
                                >
                                    <a>Become a Findawayer</a>
                                </Link>
                                <Link className="nav-item" href="/contact" activeClassName="txt-bold">
                                    <a>Contact Us</a>
                                </Link>
                            </nav>
                        </animated.div>
                    )
            )}
        </header>
    );
};

export default Header;
