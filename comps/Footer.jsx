import Link from 'next/link';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Footer = (props) => (
    <footer>
        <div className="container">
            <div className="row mb-5">
                <div className="col-xs-12 col-md-2 mb-xs-3">
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
                <div className="col-xs-12 col-md-2 col-md-offset-1 mb-xs-4 mb-md-0">
                    <Link href="/about" className="col-header">
                        About Findaway
                    </Link>
                </div>
                <div className="col-xs-12 col-md-2 mb-xs-4 mb-md-0">
                    <span className="col-header">Our Partners</span>
                    <ul className="list-flat">
                        <li>
                            <Link href="/experience">
                                <a>Retailers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a>Retailers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a>Retailers</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/experience">
                                <a>Retailers</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-2">
                    <Link href="/experience">
                        <a className="col-header mb-4">Retailers</a>
                    </Link>
                    <Link href="/experience">
                        <a className="col-header mb-4">Retailers</a>
                    </Link>
                    <Link href="/experience">
                        <a className="col-header mb-4">Retailers</a>
                    </Link>
                    <Link href="/experience">
                        <a className="col-header mb-4">Retailers</a>
                    </Link>
                </div>
                <div className="col-xs-12 col-md-3">
                    <p className="mb-4">31999 Aurora Rd Solon, OH 44139</p>
                    <ul className="list-inline">
                        <li>
                            <a href="https://www.facebook.com/FindawayWorld" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare width={17} height={17} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/wearefindaway" target="_blank" rel="noopener noreferrer">
                                <FaFacebook width={18} height={18} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/wearefindaway" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare width={18} height={15} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>
                <strong>&copy; 2019 Findaway</strong>
            </p>
        </div>
    </footer>
);

export default Footer;
