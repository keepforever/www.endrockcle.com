import '../scss/styles.scss';
import SiteLayout from '../comps/SiteLayout';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    // return (
    //     <SiteLayout>
    //         <Component {...pageProps} />;
    //     </SiteLayout>
    // );
    return <Component {...pageProps} />;
}
