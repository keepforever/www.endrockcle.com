import Link from 'next/link';
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = (props) => (
    <footer>
        <div className="container txt-er-red">
            <div className="row mb-5">
                <div className="col-xs-12 col-md-2 mb-xs-3">
                    <Link href="/">
                        <img
                            style={{
                                height: '33px',
                                width: '164px',
                            }}
                            src="/logo-navbar.png"
                            alt="band logo"
                        />
                    </Link>
                </div>
                <div className="col-xs-12 col-md-2 col-md-offset-1 mb-xs-4 mb-md-0">
                    <div className="row">
                        <Link href="/shows">
                            <a className="txt-er-red">Shows</a>
                        </Link>
                    </div>
                    <div className="row mt-2">
                        <Link href="/about">
                            <a className="txt-er-red">About</a>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-2 mb-xs-4 mb-md-0">
                    <div className="row">
                        <Link href="/song-list">
                            <a className="txt-er-red">Song List</a>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-2">
                    <div className="row">
                        <Link href="/contact">
                            <a className="mb-4 txt-er-red">Contact</a>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12 col-md-3">
                    <div className="row">
                        <ul className="list-inline">
                            <li>
                                <a
                                    href="https://www.facebook.com/EndRockCle/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook className="txt-er-red"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/wearefindaway" target="_blank" rel="noopener noreferrer">
                                    <FaInstagramSquare className="txt-er-red"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/wearefindaway" target="_blank" rel="noopener noreferrer">
                                    <FiMail className="txt-er-red"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>
                <strong>&copy; 2020 End Rock LLC</strong>
            </p>
        </div>
    </footer>
);

export default Footer;
