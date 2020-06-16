import Link from 'next/link';

const Navbar = props => {
    return (
        <div className="site-header frosted-glass">
            <div style={{minHeight: '62px'}} className="container">
                <Link href="/">
                    <h4 className="mb-0">End Rock</h4>
                </Link>

                <ul className="list-inline">
                    <li>
                        <Link href="/">
                            <button className="btn btn-nav">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience">
                            <a className="btn btn-primary">Experience</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
