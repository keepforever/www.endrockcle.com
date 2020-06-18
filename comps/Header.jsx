import { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { AiOutlineMenu } from 'react-icons/ai';
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
                            {!menuOpen && <AiOutlineMenu size={32} />}
                            {menuOpen && <FaWindowClose size={32} />}
                        </a>
                    </div>
                </div>
            </div>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} className="navigation" style={props}>
                            <nav className="container">
                                <Link href="/about">
                                    <a>About End Rock</a>
                                </Link>
                                <div className="nav-group">
                                    <a className="nav-group-header">Our Partners</a>
                                    <Link href="/retailers">
                                        <a className="nav-item">Retailers</a>
                                    </Link>
                                    <Link href="/publishers">
                                        <a className="nav-item">Publishers</a>
                                    </Link>
                                    <Link href="/authors">
                                        <a className="nav-item">Authors</a>
                                    </Link>
                                    <Link href="/institutions">
                                        <a className="nav-item">Institutions</a>
                                    </Link>
                                </div>
                                <Link href="/whats-happening">
                                    <a>News Center</a>
                                </Link>
                                <Link href="/being-a-findawayer">
                                    <a>Being a Findawayer</a>
                                </Link>
                                <Link href="/being-a-findawayer/#join-us">
                                    <a>Become a Findawayer</a>
                                </Link>
                                <Link href="/contact">
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
