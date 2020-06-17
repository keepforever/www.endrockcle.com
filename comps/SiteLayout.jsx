import { useState, useEffect } from 'react';
import classnames from 'classnames';

import Header from './header';
import Footer from './footer';

const Layout = ({ children, dark = false }) => {
    const [fixed, setFixed] = useState(false);
    const [hasScrollbars, setHasScrollBars] = useState(false);
    useEffect(() => {
        if (window.Modernizr && window.Modernizr.hiddenscroll) {
            setHasScrollBars(false);
        } else {
            setHasScrollBars(true);
        }
    }, []);
    return (
        <div className={classnames('site', { fixed, hasScrollbars })}>
            <Header siteTitle="End Rock CLE" dark={false} setFixed={setFixed} fixed={fixed} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
