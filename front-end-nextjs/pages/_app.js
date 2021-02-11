import Head from 'next/head';
import '../styles/bootstrap-grid.css';
import '../styles/bootstrap-reboot.css';
import '../styles/bootstrap.css';
import '../public/static/jank-empty.css'

function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />

    )
}

export default MyApp;