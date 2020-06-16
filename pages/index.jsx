import Link from 'next/link';

const Home = props => {
    return (
        <div style={{ flex: 1 }}>
            <div style={{ maxWidth: '500px' }} className="container frosted-glass mb-6">
                <div className="row">
                    <div className="col-xs-12 center-xs">
                        <h1 style={{ fontSize: '64px' }} className="wssb">
                            Brian
                        </h1>
                    </div>
                    <div className="col-xs-12 center-xs">
                        <h3 className="wst">is a web developer.</h3>
                    </div>
                    <div className="col-xs-12 center-xs">
                        <h1 style={{ fontSize: '48px' }} className="wssb">
                            good at
                        </h1>
                    </div>
                    <div className="col-xs-12 center-xs">
                        <h3 className="wst">JavaScript and React</h3>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '500px' }} className="container">
                <Link href="/experience">
                    <div className="row frosted-glass mb-4 center-xs middle-xs glass-link py-3 pointer">
                        <div className="col-xs-12">
                            <h3 className="wssb">Experience</h3>
                            <p className="mb-0">Paid professional experience history and accomplishments</p>
                        </div>
                    </div>
                </Link>

                <Link href="/consulting">
                    <div className="row frosted-glass mb-4 center-xs middle-xs glass-link py-3 pointer">
                        <div className="col-xs-12">
                            <h3 className="wssb">Consulting</h3>
                            <p className="mb-0">Learn more about how I can help you</p>
                        </div>
                    </div>
                </Link>

                <Link href="/about">
                    <div className="row frosted-glass mb-4 center-xs middle-xs glass-link py-3 pointer">
                        <div className="col-xs-12">
                            <h3 className="wssb">About</h3>
                            <p className="mb-0">The man behind the legend</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
