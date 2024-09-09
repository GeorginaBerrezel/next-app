// src/pages/_app.js

import '../styles/global.scss';  // Assure-toi que le chemin est correct

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
