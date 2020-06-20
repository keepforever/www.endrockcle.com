import { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { useTransition, animated } from 'react-spring';

const Header = ({ siteTitle = '', dark = false, setFixed }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const transitions = useTransition(menuOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const closeMenu = () => {
        console.log('\n', `hello close menu `, '\n');
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
                                    cursor: 'pointer',
                                }}
                                src="/erc-logo-yellow-header.png"
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
                            {!menuOpen && <AiOutlineMenu className="txt-er-red" size={32} />}
                            {menuOpen && <AiOutlineClose className="txt-er-red" size={32} />}
                        </a>
                    </div>
                </div>
            </div>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} className="navigation" style={props}>
                            <nav className="container center-xs">
                                <Link href="/">
                                    <a className="nav-group-header txt-silver" onClick={closeMenu}></a>
                                </Link>

                                <Link href="/song-list">
                                    <a className="nav-group-header txt-silver" onClick={closeMenu}>
                                        Song List
                                    </a>
                                </Link>

                                <Link href="/about">
                                    <a className="nav-group-header txt-silver" onClick={closeMenu}>
                                        About
                                    </a>
                                </Link>

                                <Link href="/contact">
                                    <a className="nav-group-header txt-silver" onClick={closeMenu}>
                                        Contact
                                    </a>
                                </Link>

                                <Link href="/shows">
                                    <a className="nav-group-header txt-silver" onClick={closeMenu}>
                                        Shows
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-group-header txt-silver" onClick={closeMenu}>
                                        Home
                                    </a>
                                </Link>
                            </nav>
                        </animated.div>
                    )
            )}
        </header>
    );
};

export default Header;
