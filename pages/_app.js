import Head from 'next/head';
import Link from 'next/link';
import { Noto_Sans_KR } from 'next/font/google';

const myFont = Noto_Sans_KR ({
    subsets: ['latin'],
    weight: ['400'],
    });


const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: myFont,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between', // 요소들을 좌우로 배치
        alignItems: 'center',
        width: '100%',
        height: '40px',
        background: 'white',
        color: '#fff',
        padding: '20px',
        textAlign: 'left',
        fontFamily: myFont,
    },
    nav: {
        display: 'flex',
        gap: '20px', // 각 요소 사이의 간격
    },
    navItem: {
        textDecoration: 'none',
        fontFamily: myFont,
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    main: {
        flex: 1,
        width: '100%',
        background: 'linear-gradient(180deg, #FFA500 0, #FFA500 350px, #ffffff 350px, #ffffff 100%)',
        padding: '20px',
        textAlign: 'center',
        fontFamily: myFont,
    },
    logo: {
        width: '120px',
        height: 'auto',
        padding: '0 0 0 10px',
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>MOON</title>
            </Head>
            <div style={styles.layout}>
                <header style={styles.header}>
                    <Link href="/" passHref legacyBehavior> 
                        <a>
                            <img src="/logo.png" alt="Logo" style={styles.logo} />
                        </a>
                    </Link>
                    <nav style={styles.nav}>
                        <Link href="/about" passHref legacyBehavior>
                            <a style={styles.navItem}>About</a>
                        </Link>
                        <Link href="/inform" passHref legacyBehavior>
                            <a style={styles.navItem}>Personal</a>
                        </Link>
                        <Link href="/health_service" passHref legacyBehavior>
                            <a style={styles.navItem}>Health Service</a>
                        </Link>
                    </nav>
                </header>
                <main style={styles.main}>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}

export default MyApp;